const Figma = require('figma-api')
const diff = require('diff')
const chalk = require('chalk')
const figlet = require('figlet')
const camelCase = require('lodash.camelcase')
const Configstore = require('configstore')
const { createDir } = require('./util')

const conf = new Configstore(require('../../package.json').name)

module.exports = async function parse ({ name: set, ignore, svg: svgDir, data: dataDir }, progress) {
  const iconSet = await conf.get(set)
  if (!iconSet) {
    console.log(`  Icon set "${set}" not found`)
    process.exit(1)
  }
  // console.log(chalk.cyan(figlet.textSync(iconSet.file.curr.name)))
  // console.log()
  const fileKey = iconSet.key
  const personalAccessToken = iconSet.token

  progress.start(100, 0, {
    stage: 'Starting up...'
  })
  progress.update(3, {
    stage: 'Downloading Figma file...'
  })

  await createDir(svgDir)
  await createDir(dataDir)

  const previousFile = await conf.get(`${set}.file.curr`)
  conf.set(`${set}.file.prev`, previousFile)

  const api = new Figma.Api({ personalAccessToken })
  const currentFile = await api.getFile(fileKey)
  conf.set(`${set}.file.curr`, currentFile)
  progress.update(6, {
    stage: 'Parsing file...'
  })
  const components = await parseFile(currentFile, set, ignore)
  progress.update(10, {
    stage: 'Setting up components...'
  })
  conf.set(`${set}.components`, components)
}

const getName = (name, split=false) => camelCase((split ? name.split('/').reverse()[0] : name).trim())

async function parseFile (file, set, ignore) {
  const prevFile = await conf.get(`${set}.file.prev`)
  // set up initial components scraffold
  const components = Object.entries(file.components)
    .reduce((obj, [id, { name, description }]) => ({
      ...obj,
      ...(
        !name.includes('/')
          ? {
            [getName(name)]: {
              id,
              categories: {},
              terms: {
                ...name
                  .split('-')
                  .filter(term => isNaN(term))
                  .reduce((obj, term) => ({ ...obj, [term]: true }), {}),
                ...description.split(',')
                  .map(term => term.trim())
                  .filter(n => n)
                  .reduce((obj, term) => ({ ...obj, [term]: true }), {})
              },
              variants: {}
            }
          }
          : {}
      )
    }), {})
  // populate core components with child data
  const variants = []
  file.document.children.filter(({ name }) => ['icons'].includes(name.toLowerCase())).forEach(page => page.children.forEach(categoryFrame => {
  // })
  // file.document.children.find(({ name }) => name === 'Source').children.forEach(categoryFrame => {
    const category = categoryFrame.name.toLowerCase()
    if (categoryFrame.type !== 'FRAME' || !categoryFrame.children) {
      return
    }
    categoryFrame.children.forEach(({ type, name }) => {
      const [variant, icon] = name.split('/').map(p => p.trim())
      const isValid = type === 'FRAME' &&
        name.includes('/') &&
        /^[a-z]/.test(name) &&
        camelCase(icon) in components &&
        !variants.includes(variant)
      if (isValid) {
        variants.push(variant)
      }
    })
  }))
  conf.set(`${set}.variants`, variants)
  // populate core components with child data
  file.document.children.filter(({ name }) => ['icons'].includes(name.toLowerCase())).forEach(page => page.children.forEach(categoryFrame => {
  // })
  // file.document.children.find(({ name }) => name === 'Source').children.forEach(categoryFrame => {
    const category = categoryFrame.name.toLowerCase()
    if (categoryFrame.type !== 'FRAME' || !categoryFrame.children) {
      return
    }
    categoryFrame.children.forEach(componentVariant => {
      const componentName = getName(componentVariant.name, true)
      const component = components[componentName]
      if (componentName in components) {
        if (!componentVariant.name.includes('/')) {
          // indicate source category for multiple components
          components[componentName].categories[(category.toLowerCase())] = componentVariant.type === 'COMPONENT'
          // combine terms from ancestor components with children
          const isInheritableComponent = node => node.type === 'INSTANCE' && getName(node.name) in components
          const inheritedComponents = findAll(componentVariant, isInheritableComponent)
            .filter(node => !node.name.includes('/'))
            .map(({ name }) => getName(name))
            .reduce((arr, node) => arr.includes(node) ? arr : [...arr, node], [])
          if (inheritedComponents.length) {
            const terms = inheritedComponents.reduce((obj, inheritedComponent) => ({
              ...obj,
              ...components[inheritedComponent].terms
            }), component.terms)
            components[componentName].terms = terms
          }
        }
        if (ignore) {
          const prevComponentVariant = prevFile.document
            .children.find(({ name }) => name.toLowerCase().includes('icons'))
            .children.find(({ name }) => name.toLowerCase() === category)
            .children.find(({ name }) => name === componentVariant.name)
          const variantDiff = diff.diffJson(componentVariant, prevComponentVariant)
          const isDifferent = variantDiff.reduce((b, { value, added, removed }) => b && ((added && added.length) || (removed && removed.length)), false)
          if (!isDifferent) {
            return
          }
        }
        const variant = componentVariant.name.split('/')[0].trim()
        if (variants.includes(variant)) {
          components[componentName].variants = {
            ...component.variants,
            [variant]: componentVariant.id
          }
        }
      }
    })
  }))
  return components
}

function findAll (node, fn) {
  let arr = []
  if ('children' in node) {
    arr = node.children.reduce((arr, child) => [...arr, ...findAll(child, fn)], [])
  }
  if (fn(node)) {
    arr = [...arr, node]
  }
  return arr
}

// https://mathiasbynens.be/notes/reserved-keywords
const reservedKeywords = new Set([
  'do',
  'if',
  'in',
  'for',
  'let',
  'new',
  'try',
  'var',
  'case',
  'else',
  'enum',
  'eval',
  'null',
  'this',
  'true',
  'void',
  'with',
  'await',
  'break',
  'catch',
  'class',
  'const',
  'false',
  'super',
  'throw',
  'while',
  'yield',
  'delete',
  'export',
  'import',
  'public',
  'return',
  'static',
  'switch',
  'typeof',
  'default',
  'extends',
  'finally',
  'package',
  'private',
  'continue',
  'debugger',
  'function',
  'arguments',
  'interface',
  'protected',
  'implements',
  'instanceof',
])
