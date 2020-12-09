const pretty = require('pretty')
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
  removeUnused(svgNode)
  if (replaceColor.includes(variant)) {
    applyCurrentColor(svgNode)
  }
  if (removeStroke.includes(variant)) {
    removeStrokeWidths(svgNode)
  }
  return pretty(stringify(svgNode))
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
  processSvg,
  removeUnused,
  removeStrokeWidths,
  applyCurrentColor,
  propIsValid
}
