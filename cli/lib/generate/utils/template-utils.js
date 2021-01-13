const fs = require('fs')
const path = require('path')
const { upperFirst, camelCase, startCase, kebabCase } = require('lodash')
const { parse, stringify } = require('svgson')

module.exports.createIndex = ({ setName, components }, extension) => {
  let indexString = ''

  for ({ name, variants } of components) {
    const componentName = upperFirst(camelCase(name))
    const className = startCase(setName) + componentName
    const ext = extension ? `.${extension}` : ''
    indexString += `export { default as ${className} } from './icons/${componentName}${ext}'\n`
  }

  return indexString
}

module.exports.s = n => Array(n + 1).fill(null).join(' ')

module.exports.createVariants = async function (variants, options) {
  return Object.keys(variants).reduce(async (p, variant) => p.then(async str => {
    const replaceProps = ['path', 'rect', 'circle']
    const svg = fs.readFileSync(path.join(process.cwd(), options.set, variant, `${kebabCase(name)}.svg`), 'utf-8')
    // const svgId = variants[variant]
    const icon = await parse(svg)
    const prepend = options.parent.prepend(variant)
    const append = options.parent.append(variant)
    const children = await getChildren (icon, options.child.space)
    return str + prepend + children + append

    async function getChildren (node, space) {
      return node.children.reduce(async (p, child) => p.then(async str => {
        const prepend = options.child.prepend(child)
        const append = options.child.append(child)

        if (!replaceProps.includes(child.name)) {
          const body = await stringify(child)
          return str + '\n' + options.child.space.split(' ').slice(2).join(' ') + body
        } else {
          const children = Object.entries(child.attributes).map(([attr, val]) => {
            let res = options.child.space
            switch (attr) {
              // case 'stroke': break
              case 'stroke-width':
                res += options.child.attr(attr, 'strokeWidth'); break
              case 'stroke-linecap':
                res += options.child.attr(attr, 'strokeLinecap'); break
              case 'stroke-linejoin':
                res += options.child.attr(attr, 'strokeLinejoin'); break
              // case 'fill': break
              // case 'fill-opacity': break
              default:
                res += options.child.default(attr, val)
            }
            return res
          })

          const body = children.join('')
          const res = prepend + body + append

          return str + res
        }
      }), Promise.resolve(''))
    }
  }), Promise.resolve(''))
}
