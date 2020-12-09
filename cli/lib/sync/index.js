const Configstore = require('configstore')
const Figma = require('figma-api')
const { camelCase } = require('lodash')
const rp = require('promise-request-retry')

const { testName } = require('./name')
const { findOne, findAll } = require('./node')
const { processSvg } = require('./svg')
const { createDir, saveSVG, saveJSON } = require('./file')

const conf = new Configstore('@glyphs/cli')

module.exports = async function sync ({ key, ignore, svg: svgDir, data: dataDir }, progress) {
  const set = conf.get(key)
  const personalAccessToken = set.token
  const api = new Figma.Api({ personalAccessToken })

  if (!set) {
    console.log(`  Icon set "${key}" not found`)
    process.exit(1)
  }

  let progressVal = 0
  progress.start(100, 0, { stage: 'Starting up...' })
  setInterval(() => {
    progressVal = progressVal + 1
    progress.update(progressVal)
  }, 2000)

  createDir(svgDir)
  createDir(dataDir)

  progress.update(progressVal, { stage: 'Downloading Figma file...' })

  const previousFile = conf.get(`${key}.file.curr`)
  conf.set(`${key}.file.prev`, previousFile)
  const currentFile = await api.getFile(key)
  conf.set(`${key}.file.curr`, currentFile)

  progressVal = Math.max(progressVal, 6)
  progress.update(progressVal, { stage: 'Parsing file...' })

  const page = currentFile.document.children.find(({ name }) => name.toLowerCase() === 'icons')

  const components = Object.entries(set.file.curr.components)
    .reduce((arr, [id, { name, description }]) => [
      ...arr,
      ...(!testName(name) ? [] : [{
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
      }])
    ], [])
    .map((component, i, arr) => {
      const node = findOne(page, ({ id }) => id === component.id)
      const inherited = findAll(node, ({ name, type }) => type === 'INSTANCE' && /^_[a-zA-Z]/.test(name))
      if (inherited.length) {
        const terms = inherited.reduce((obj, component) => ({
          ...obj,
          ...arr.find(({ name }) => name === camelCase(component.name)).terms
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

  const meta = {
    key,
    name: set.name,
    unique: components.length,
    total: components.reduce((sum, { variants }) => sum + Object.keys(variants).length, 0),
    variants: [...new Set(components.reduce((arr, { variants }) => [...arr, ...Object.keys(variants)], []))],
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

  const figmaLimit = 400
  const chunkSize = figmaLimit / meta.variants.length
  const chunks = Array(Math.ceil(components.length / chunkSize)).fill().map((_, i) => i * chunkSize).map(i => components.slice(i, i + chunkSize))

  const iconsConfig = (findOne(page, ({ name }) => name === 'Config') || {}).children
  let svgConfig
  if (iconsConfig) {
    svgConfig = iconsConfig.filter(({ type, name }) => type === 'INSTANCE' && name.includes('config')).map(node => {
      const key = node.children.find(({ name }) => name === 'key').characters
      const value = node.children.find(({ name }) => name === 'value').characters
      return { [camelCase(key)]: value.split(',').map(i => i.toLowerCase().trim()) }
    })
  }

  let downloaded = 0
  progressVal = Math.max(progressVal, 10)
  progress.update(progressVal, { stage: `Setting up ${meta.total} icons...` })

  meta.variants.forEach(variant => createDir(`${svgDir}/${variant}`))

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

      const svgs = await Promise.all(Object.entries(images).map(([id, uri], i) => {
        return rp({ uri, retry: 3, delay: 1000 })
      }))
      await svgs.reduce((promise, svgString, i) => {
        return promise.then(async () => {
          const [id, url] = Object.entries(images)[i]
          const [name, variant] = idMap[id]
          const svg = await processSvg(svgString, variant, svgConfig)

          saveSVG(name, svgDir, variant, svg)
          components[components.findIndex(({ name: n }) => n === name )].variants[variant] = svg
          downloaded++
          const newProgress = downloaded / meta.total * 80 + 10
          progressVal = Math.max(progressVal, newProgress)
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
}
