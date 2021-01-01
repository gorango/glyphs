const Configstore = require('configstore')
const Figma = require('figma-api')
const { camelCase } = require('lodash')
const rp = require('promise-request-retry')
const chalk = require('chalk')
const Progress = require('cli-progress')

const { testName } = require('./name')
const { findOne, findAll } = require('./node')
const { processSvg } = require('./svg')
const { createDir, saveSVG, saveJSON } = require('./file')

const conf = new Configstore('@glyphs/cli')
const progress = new Progress.SingleBar({
  format: '|' + chalk.cyan('{bar}') + '| {percentage}% || {stage}',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true
}, Progress.Presets.shades_classic)

module.exports = async function sync ({ key, set, svg: svgDir, data: dataDir }) {
  if (!key || !set) {
    throw new Error('The file key and set name are required')
  }

  const fileConf = conf.get(key)
  const personalAccessToken = fileConf.token
  const api = new Figma.Api({ personalAccessToken })

  if (!fileConf) {
    console.log(`  File "${key}" not found`)
    process.exit(1)
  }

  let progressVal = 0
  progress.start(100, 0)
  setInterval(() => {
    progressVal = progressVal + 1
    progress.update(progressVal)
  }, 3000)

  createDir(svgDir)
  createDir(dataDir)

  progress.update(progressVal, { stage: 'Downloading Figma file...' })

  const file = await api.getFile(key)
  const sets = file.document.children.filter(({ name }) => name.startsWith('->')).map(({ name }) => name.split(' ')[1])
  conf.set(`${key}.sets`, sets)
  conf.set(`${key}.name`, file.name)

  if (!sets.includes(set)) {
    console.log()
    console.log(`  Can't find the icon set "${set}"`)
    console.log()
    process.exit(1)
  }

  progressVal = Math.max(progressVal, 6)
  progress.update(progressVal, { stage: 'Parsing file...' })

  const page = file.document.children.find(({ name }) => name.toLowerCase().includes(set.toLowerCase()))

  const components = Object.entries(file.components)
    .filter(([id, { name }]) => testName(name))
    .filter(([id, { name }]) => findOne(page, ({ name: n, id: i }) => n === name && i === id))
    .reduce((arr, [id, { name, description }]) => [
      ...arr,
      {
        name: camelCase(name),
        id,
        terms: {
          ...name.slice(1).split(/[\s-]/).filter(isNaN).reduce((obj, term) => ({ ...obj, [term.toLowerCase()]: true }), {}),
          ...(description.length
            ? description.split(',').map(t => t.trim()).filter(n => n).reduce((obj, term) => ({ ...obj, [term.toLowerCase()]: true }), {})
            : {}
          )
        },
        categories: (() => {
          const nodes = findAll(page, ({ name: n, type: t, parent: p }) =>
            (t === 'COMPONENT' || t === 'INSTANCE') && n === name
          )
          if (nodes) {
            return nodes.reduce((obj, { type, parent }) => ({
              ...obj,
              ...(parent && parent.type === 'FRAME' ? { [parent.name.toLowerCase()]: type === 'COMPONENT' } : {})
            }), {})
          }
        })(),
        variants: (() => {
          const node = findOne(page, ({ name: n, type: t }) => t === 'COMPONENT_SET' && n === name.slice(1))
          if (node && 'children' in node) {
            return node.children.reduce((obj, { id, name }) => ({
              ...obj,
              [name.split('=')[1].toLowerCase()]: id
            }), {})
          } else {
            console.log(name)
          }
        })()
      }
    ], [])
    .map((component, i, arr) => {
      const node = findOne(page, ({ id }) => id === component.id)
      if (!node) {
        console.log(component)
      }
      const inherited = node && findAll(node, ({ name, type }) => type === 'INSTANCE' && /^_[a-zA-Z]/.test(name))
      if (inherited.length) {
        const terms = inherited.reduce((obj, component) => ({
          ...obj,
          ...(arr.find(({ name }) => name === camelCase(component.name)) || {}).terms
        }), component.terms)
        component.terms = terms
      }

      return {
        ...component,
        terms: Object.keys(component.terms),
        categories: Object.entries(component.categories)
          .sort(([_catA, boolA], [_catB, boolB]) => boolA || boolB)
          .map(([category]) => category)
      }
    })

  const setConfig = (() => {
    const existingConfig = (findOne(page, ({ name, type }) => type === 'FRAME' && name === 'Config') || {}).children
    return !existingConfig ? null : existingConfig
      .filter(({ type, name, visibile }) => type === 'INSTANCE' && name.includes('config') && visibile !== false)
      .map(node => {
        const key = node.children.find(({ name }) => name === 'key').characters
        const value = node.children.find(({ name }) => name === 'value').characters
        return { [camelCase(key)]: value.split(',').map(i => i.toLowerCase().trim()) }
      })
      .reduce((obj, config) => ({ ...obj, ...config }), {})
  })()

  const meta = {
    key,
    name: set,
    unique: components.length,
    total: components.reduce((sum, { variants }) => sum + Object.keys(variants).length, 0),
    variants: (() => {
      return setConfig
        ? setConfig.variants
        : [...new Set(components.reduce((arr, { variants }) => [...arr, ...Object.keys(variants)], []))]
    })(),
    categories: page.children.reduce((obj, frame) => {
      return {
        ...obj,
        ...(!findOne(frame, ({ type, name }) => ['COMPONENT', 'INSTANCE'].includes(type) && testName(name)) ? {} : {
          [camelCase(frame.name.trim())]: [...new Set(
            frame.children.filter(({ name }) => testName(name)).map(({ name }) => camelCase(name.trim()))
          )]
        })
      }
    }, {})
  }

  await saveJSON(`${dataDir}/meta`, meta)
  meta.variants.forEach(variant => createDir(`${svgDir}/${variant}`))

  progressVal = Math.max(progressVal, 10)
  progress.update(progressVal, { stage: `Setting up ${meta.total} icons...` })

  const figmaLimit = 400
  const chunkSize = figmaLimit / meta.variants.length
  const chunks = Array(Math.ceil(components.length / chunkSize)).fill().map((_, i) => {
    const start = i * chunkSize
    return components.slice(start, start + chunkSize)
  })

  let downloaded = 0

  await chunks.reduce((promise, targets, i) => {
    return promise.then(async () => {
      const idMap = targets.reduce((obj, { name, variants }) => ({
        ...obj,
        ...Object.entries(variants).reduce((o, [variant, id]) => ({ ...o, [id]: [name, variant] }), {})
      }), {})
      const ids = targets.reduce((arr, { variants }) => [...arr, ...Object.values(variants)], [])

      const opts = { ids, format: 'svg' }
      const { images, err } = await api.getImage(key, opts).catch(err => ({ err }))

      if (err) {
        return Promise.reject(err)
      }

      const svgs = await Promise.all(
        Object.entries(images).map(([id, uri]) =>
          rp({ uri, retry: 3, delay: 1000 })
        )
      )
      await svgs.reduce((promise, svgString, i) => {
        return promise.then(async () => {
          const [id, url] = Object.entries(images)[i]
          const [name, variant] = idMap[id]
          const svg = await processSvg(svgString, variant, setConfig)

          saveSVG(name, svgDir, variant, svg)
          components[components.findIndex(({ name: n }) => n === name )].variants[variant] = svg
          downloaded++
          const newProgress = downloaded / meta.total * 80 + 10
          progressVal = Math.min(progressVal, newProgress)
          progress.update(progressVal, { stage: `${downloaded}/${meta.total} downloaded...` })
          return Promise.resolve()
        })
      }, Promise.resolve())

      return Promise.resolve()
    })
  }, Promise.resolve())

  progress.update(90, { stage: 'Saving categories...' })

  await saveJSON(`${dataDir}/components`, components)

  progress.update(100, { stage: 'Done' })
  progress.stop()

  return Promise.resolve()
}
