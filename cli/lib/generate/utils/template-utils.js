const fs = require('fs')
const path = require('path')
const pretty = require('pretty')
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

module.exports.s = n => Array(n + 1).fill().join(' ')

module.exports.createVariants = async function (variants, options) {
  return Object.keys(variants).reduce(async (p, variant) => p.then(async str => {
    const replaceProps = ['path', 'rect', 'circle']
    const isReact = options?.set === 'react'
    const icon = fs.readFileSync(path.join(process.cwd(), options.set, variant, `${kebabCase(options.name)}.svg`), 'utf-8')
    // const svgId = variants[variant]
    const svg = await parse(icon, { camelCase: isReact })
    const prepend = options.parent.prepend(variant)
    const append = options.parent.append(variant)
    const children = await getChildren (svg, options.child.space)
    return str + prepend + children + append

    async function getChildren (node, space) {
      return node.children.reduce(async (p, child) => p.then(async str => {
        const space = '\n' + options.child.space.split(' ').slice(2).join(' ')
        if (!replaceProps.includes(child.name) || !options?.transform?.stroke?.[variant]) {
          if (!(options?.transform?.color || []).includes(variant)) {
            const body = await stringify(child, {
              transformAttr: function (key, val) {
                switch (key) {
                  case 'stroke':
                  case 'fill':
                    if (val.startsWith('url')) {
                      return options.child.default(key, val.replace(/\((.*?)\)/, (match, p1) => {
                        return `(${p1 + '_' + options.name})`
                      }))
                    } else {
                      return options.child.default(key, val)
                    }
                  case 'id':
                    return options.child.default(key, val + '_' + options.name)
                  default:
                    return options.child.default(key, val)
                }
              }
            })
            return str + space + body
          }
          const body = await stringify(child)
          return str + space + body
        } else {
          const strokeWidth = isReact ? 'strokeWidth' : 'stroke-width'
          const strokeLinecap = isReact ? 'strokeLinecap' : 'stroke-linecap'
          const strokeLinejoin = isReact ? 'strokeLinejoin' : 'stroke-linejoin'

          if (child.attributes.stroke && !child.attributes[strokeWidth]) {
            child.attributes[strokeWidth] = (options.transform?.stroke?.[variant])
              ? options.transform.stroke[variant]
              : 1
          }
          const body = await stringify(child, {
            transformAttr: function (key, val) {
              switch (key) {
                case strokeLinecap:
                case strokeLinejoin:
                  return options.child.attr(key, camelCase(key))
                case strokeWidth:
                  return options.child.attr(key, `${camelCase(key)} || ${options.transform?.stroke?.[variant]}`)
                default:
                  return options.child.default(key, val)
              }
            }
          })

          // const prepend = options.child.prepend(child)
          // const append = options.child.append(child)
          // return str + prepend + body + append

          return str + space + body
        }
      }), Promise.resolve(''))
    }
  }), Promise.resolve(''))
}
