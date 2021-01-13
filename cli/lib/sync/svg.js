const pretty = require('pretty')
const { nanoid } = require('nanoid')
const { parse, stringify } = require('svgson')

async function processSvg (svgString, variant, svgConfig) {
  if (!svgString) {
    return null
  }
  const configDefaults = {
    replaceColor: [],
    removeStroke: []
  }
  const { replaceColor, removeStroke } = { ...configDefaults, ...svgConfig }
  const svgNode = svgString ? await parse(svgString) : null
  if (replaceColor.includes(variant)) {
    applyCurrentColor(svgNode)
  }
  return pretty(stringify(svgNode))
}

function findAllIds (svgString, id) {
  const regex = /(?:url\(#)[a-zA-Z0-9_]+/gim
  let result
  const indices = []
  while (result = regex.exec(svgString)) {
    indices.push([result.index, result[0]])
  }
  return indices.map(([i, val]) => {
    const found = svgString.slice(i + 5, i + val.length)
    const newId = found.slice(0, found.length) + id
    const oldId = new RegExp(found, 'g')
    return [oldId, newId]
  })
}

function removeUnused (node) {
  if (node.name === 'svg') {
    delete node.attributes.width
    delete node.attributes.height
    delete node.attributes.xmlns
  }
}

function removeStrokeWidths (node) {
  if (node.children) {
    node.children.forEach(removeStrokeWidths)
  }
  if ('stroke-width' in node.attributes) {
    delete node.attributes['stroke-width']
  }
}

function applyCurrentColor (node) {
  if (node.children) {
    node.children.forEach(applyCurrentColor)
  }
  if (node.attributes) {
    if (propIsValid(node.attributes.fill)) {
      node.attributes.fill = 'currentColor'
    }
    if (propIsValid(node.attributes.stroke)) {
      node.attributes.stroke = 'currentColor'
    }
  }
}

function propIsValid (prop) {
  return prop && prop !== 'none' && !prop.startsWith('url')
}

module.exports = {
  processSvg
}
