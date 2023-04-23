const { camelCase } = require('lodash')
const { findOne, findAll } = require('./node')
const { validName, validType } = require('./validate')

const addTerms = (obj, term) => ({ ...obj, [term.toLowerCase()]: true })

module.exports.iconsMeta = (file, page) => Object
  .entries(file.components)
  .filter(([id, { name }]) => findOne(page, ({ name: n, id: i }) => n === name && i === id))
  .filter(([id, { name }]) => validName(name))
  .reduce((arr, [id, { name, description }]) => [
    ...arr,
    {
      id,
      name: camelCase(name),
      terms: {
        ...name
          .replace('_', '')
          .split(/[\s-]/)
          .filter(isNaN)
          .reduce(addTerms, {}),
        ...(description.length
          ? description
            .split('\n')[0] // The first line of a description should include search terms
            .split(',')
            .map(t => t.trim())
            .filter(Boolean)
            .reduce(addTerms, {})
          : {}
        )
      },
      categories: (() => {
        const nodes = findAll(page, ({ name: n, type: t }) => n === name && validType(t))
        return nodes?.reduce((obj, { type, parent }) => ({
          ...obj,
          ...(parent?.type === 'FRAME' ? { [parent.name.toLowerCase()]: type === 'COMPONENT' } : {})
        }), {})
      })(),
      variants: (() => {
        const node = findOne(page, ({ name: n, type: t }) => t === 'COMPONENT_SET' && n === name.replace('_', ''))
        return node?.children?.reduce((obj, { id, name }) => ({
          ...obj,
          [name.split('=')[1].trim().toLowerCase()]: id
        }), {})
      })()
    }
  ], [])
  .map((component, i, arr) => {
    const componentNode = findOne(page, ({ id }) => id === component.id)
    const inheritedNodes = componentNode && findAll(componentNode, ({ name, type }) => type === 'INSTANCE' && !name.startsWith('__'))

    if (inheritedNodes.length) {
      component.terms = inheritedNodes.reduce((obj, component) => ({
        ...obj,
        ...(arr.find(({ name }) => name === camelCase(component.name)) || {}).terms
      }), component.terms)
    }

    return {
      ...component,
      terms: Object.keys(component.terms),
      categories: Object.entries(component.categories)
        .sort(([_catA, boolA], [_catB, boolB]) => boolA || boolB)
        .map(([category]) => category),
    }
  })

module.exports.chunks = async (setMeta, iconsMeta, args, localConfig) => {
  const figmaLimit = 400
  const chunkSize = figmaLimit / setMeta.variants.length
  const lastRun = localConfig.updatedAt
  const diffOnly = args.diff && lastRun

  let chunkComponents = iconsMeta

  if (args.categories && args.categories.length) {
    const a = new Set(args.categories.split(',').map(s => s.toLowerCase().trim()))
    chunkComponents = iconsMeta.reduce((arr, component) => {
      const b = new Set(component.categories)
      const aInB = [...new Set([...a].filter(x => b.has(x)))].length
      if (aInB) {
        return [...arr, component]
      }
      return arr
    }, [])
  }

  if (diffOnly) {
    const mainComponents = await figma.get(`files/${args.key}/components`)
      .then(({ data: { meta } }) => meta.components)
      .catch(err => { throw new Error(err) })

    chunkComponents = chunkComponents.reduce((arr, component) => {
      const main = mainComponents.find(({ node_id: i }) => i === component.id)
      const mainUpdated = main && new Date(main.updated_at) > new Date(lastRun)
      const updatedVariants = Object.entries(component.variants).reduce((obj, [style, id]) => {
        const variant = mainComponents.find(({ node_id: i }) => i === id)
        const variantUpdated = variant && new Date(variant?.updated_at) > new Date(lastRun)
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
  }

  const chunks = Array(Math.ceil(chunkComponents.length / chunkSize)).fill().map((_, i) => {
    const start = i * chunkSize
    return chunkComponents.slice(start, start + chunkSize)
  })

  const total = chunkComponents.reduce((sum, { variants }) => sum + Object.keys(variants).length, 0)

  return { chunks, total }
}