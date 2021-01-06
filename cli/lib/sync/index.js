const Configstore = require('configstore')
const { camelCase } = require('lodash')
const axios = require('axios')
const retry = require('axios-retry')
const chalk = require('chalk')
const Progress = require('cli-progress')
const { Client: figmaClient } = require('figma-js')

const { validName, validType } = require('./validate')
const { findOne, findAll } = require('./node')
const { processSvg } = require('./svg')
const { createDir, saveSVG, saveJSON, readJSON } = require('./file')

const conf = new Configstore('@glyphs/cli')
const progress = new Progress.SingleBar({
  format: '|' + chalk.cyan('{bar}') + '| {percentage}% || {stage}',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true
}, Progress.Presets.shades_classic)

module.exports = async function sync ({ key, set, svg: svgDir, data: dataDir, diff, categories }) {
  if (!key || !set) {
    throw new Error('The file key and set name are required')
  }

  const fileConf = conf.get(key)
  const personalAccessToken = fileConf.token
  const { client: figma } = figmaClient({ personalAccessToken })
  retry(axios)
  retry(figma, {
    retries: 3,
    retryCondition: error => retry.isNetworkOrIdempotentRequestError(error)
  })

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

  const file = await figma.get(`files/${key}`).then(({ data }) => data)
  const mainComponents = await figma.get(`files/${key}/components`).then(({ data: { meta } }) => meta.components)

  const sets = file.document.children
    .filter(({ name }) => name.startsWith('->'))
    .map(({ name }) => name.split(' ')[1].toLowerCase())
    .reduce((obj, set) => ({
      ...obj,
      [set]: fileConf.sets[set] || null
    }), {})

  if (!set in sets) {
    console.log()
    console.log(`  Can't find the icon set "${set}"`)
    console.log()
    process.exit(1)
  }

  conf.set(`${key}.sets`, sets)
  conf.set(`${key}.name`, file.name)

  progressVal = Math.max(progressVal, 6)
  progress.update(progressVal, { stage: 'Parsing file...' })

  const page = file.document.children.find(({ name }) => name.toLowerCase().includes(set.toLowerCase()))

  const components = Object.entries(file.components)
    .filter(([id, { name }]) => findOne(page, ({ name: n, id: i }) => n === name && i === id))
    .filter(([id, { name }]) => validName(name))
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
          const nodes = findAll(page, ({ name: n, type: t, parent: p }) => n === name && validType(t))
          if (nodes) {
            return nodes.reduce((obj, { type, parent }) => ({
              ...obj,
              ...(parent?.type === 'FRAME' ? { [parent.name.toLowerCase()]: type === 'COMPONENT' } : {})
            }), {})
          }
        })(),
        variants: (() => {
          const node = findOne(page, ({ name: n, type: t }) => t === 'COMPONENT_SET' && n === name.slice(1))
          return node.children.reduce((obj, { id, name }) => ({
            ...obj,
            [name.split('=')[1].toLowerCase()]: id
          }), {})
        })()
      }
    ], [])
    .map((component, i, arr) => {
      const node = findOne(page, ({ id }) => id === component.id)
      const inherited = node && findAll(node, ({ name, type }) => type === 'INSTANCE' && validName(name))

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
          .map(([category]) => category),
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
        ...(!findOne(frame, ({ type, name }) => validType(type) && validName(name)) ? {} : {
          [camelCase(frame.name.trim())]: [...new Set(
            frame.children.filter(({ name, type }) => validType(type) && validName(name)).map(({ name }) => camelCase(name.trim()))
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
  const lastRun = new Date(fileConf.sets[set])
  const diffOnly = diff && mainComponents && lastRun

  let chunkComponents

  if (diffOnly) {
    chunkComponents = components.reduce((arr, component) => {
      const main = mainComponents.find(({ node_id: i }) => i === component.id)
      const mainUpdated = main && new Date(main.updated_at) > lastRun
      const updatedVariants = Object.entries(component.variants).reduce((obj, [style, id]) => {
        const variant = mainComponents.find(({ node_id: i }) => i === id)
        const variantUpdated = new Date(variant?.updated_at) > lastRun
        if (mainUpdated || variantUpdated) {
          return { ...obj, [style]: id }
        }
        return obj
      }, {})
      if (Object.keys(updatedVariants).length) {
        const chunkComponent = { ...component, variants: updatedVariants }
        return [...arr, chunkComponent]
      }
      return arr
    }, [])
  } else if (categories && categories.length) {
    const a = new Set(categories.split(',').map(s => s.toLowerCase().trim()))
    chunkComponents = components.reduce((arr, component) => {
      const b = new Set(component.categories)
      const aInB = [...new Set([...a].filter(x => b.has(x)))].length
      if (aInB) {
        return [...arr, component]
      }
      return arr
    }, [])
  } else {
    chunkComponents = components
  }
  const chunks = Array(Math.ceil(chunkComponents.length / chunkSize)).fill().map((_, i) => {
    const start = i * chunkSize
    return chunkComponents.slice(start, start + chunkSize)
  })

  let downloaded = 0

  await chunks.reduce((promise, targets, i) => {
    return promise.then(async () => {
      const idMap = targets.reduce((obj, { name, variants }) => ({
        ...obj,
        ...Object.entries(variants).reduce((o, [variant, id]) => ({ ...o, [id]: [name, variant] }), {})
      }), {})
      const ids = targets
        .reduce((arr, { variants }) => [...arr, ...Object.values(variants)], [])
        .join(',')

      const params = { ids, format: 'svg' }
      const { images, err } = await figma.get(`images/${key}`, { params }).then(({ data }) => data).catch(err => ({ err }))

      if (err) {
        return Promise.reject(err)
      }

      const svgs = await Promise.all(
        Object.entries(images).map(([id, url]) => axios.get(url))
      )
      await svgs.reduce((promise, { data: svgString }, i) => {
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
  let lastComponents

  if (diffOnly || categories.length) {
    const lastComponents = await readJSON(`${dataDir}/components.json`)
    components.forEach(component => {
      const ci = components.findIndex(({ name: n }) => n === component.name )
      const li = lastComponents.findIndex(({ name: n }) => n === component.name )
      const { variants } = components[ci]
      Object.entries(variants).forEach(([key, val]) => {
        if (!val.startsWith('<')) {
          components[ci].variants[key] = lastComponents[li].variants[key]
        }
      })
    })
  }

  await saveJSON(`${dataDir}/components`, components)
  conf.set(`${key}.sets.${set}`, new Date())

  progress.update(100, { stage: 'Done' })
  progress.stop()

  return Promise.resolve()
}
