const pretty = require('pretty')
const { parse, stringify } = require('svgson')

async function processSvg (svgString, variant) {
  if (!svgString) {
    return null
  }
  const REPLACE_CURRENT_COLOR = ['path', 'stroke', 'outline', 'line', 'solid', 'bold', 'fill', 'mono', 'duo']
  const REMOVE_CODE = ['path', 'stroke', 'line', 'outline']
  const svgNode = svgString ? await parse(svgString) : null
  removeUnused(svgNode)
  if (REPLACE_CURRENT_COLOR.includes(variant)) {
    applyCurrentColor(svgNode)
    if (REMOVE_CODE.includes(variant)) {
      removeStrokeWidths(svgNode)
    }
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
