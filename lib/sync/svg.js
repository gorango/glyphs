const pretty = require('pretty')
const { parseSync: parseSvg, stringify: stringifySvg } = require('svgson')
const { pathThatSvg } = require('path-that-svg')
const outlineStroke = require('svg-outline-stroke')

async function extractSvgFeatures(svg, variant) {
  const svgPaths = await pathThatSvg(svg)
  const svgNode = parseSvg(svgPaths)
  const { children, attributes: { viewBox } } = svgNode
  const outlineSvg = await outlineStroke(stringifySvg(svgNode))
  const { children: [outlineNode] } = parseSvg(outlineSvg)
  const { attributes: outline } = outlineNode
  const strokeWidth = variant !== 'solid' ? { ['stroke-width']: 6 } : {}
  const paths = children.map(({ attributes }) => ({ ...attributes, ...strokeWidth }))
  return { viewBox, outline, paths }
}

async function tidySvg (svgString, variant, svgConfig) {
  if (!svgString) {
    return null
  }
  const configDefaults = {
    replaceColor: [],
    removeStroke: []
  }
  const { replaceColor, removeStroke } = { ...configDefaults, ...svgConfig }
  const svgNode = svgString ? parseSvg(svgString) : null
  if (replaceColor.includes(variant)) {
    applyCurrentColor(svgNode)
  }
  return { node: svgNode, svg: pretty(stringifySvg(svgNode)) }
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
  tidySvg,
  extractSvgFeatures
}
