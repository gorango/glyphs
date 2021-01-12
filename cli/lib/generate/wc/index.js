const fs = require('fs')
const path = require('path')
const util = require('util')
const { parse, stringify } = require('svgson')
const { kebabCase, startCase, camelCase, capitalize } = require('lodash')

module.exports = async function wc ({ target, set, output, transform }) {
  const assetPath = path.join(process.cwd(), set)
  const outputPath = path.join(process.cwd(), output)
  const componentsPath = path.join(outputPath, 'icons')
  const indexPath = path.join(outputPath, 'index.js')
  const utilsPath = path.join(outputPath, 'utils.js')
  const setName = set.split('/').reverse()[0]

  let passes = 0
  let fails = 0

  if (fs.existsSync(outputPath)) {
    fs.rmdirSync(outputPath, { recursive: true })
  }
  fs.mkdirSync(outputPath)
  fs.mkdirSync(componentsPath)

  const components = require(`${assetPath}/components.json`)

  for ({ name, variants } of components) {
    const className = `${startCase(setName)}${capitalize(camelCase(name))}`
    const tagName = `${kebabCase(setName)}-${kebabCase(name)}`
    let componentString = `\
import { html, property, svg, define } from 'hybrids'
import { transform } from '../utils'

const ${className} = {
  size: '40',
  color: 'currentColor',
  variant: '',
  colors: ['#000000', '#C4C4C4'],
  strokeWidth: '3',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: '0',
  flip: '',
  render: ({ size, color, variant, strokeWidth, strokeLinecap, strokeLinejoin, rotate, flip }) => html\`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="\${size}"
      height="\${size}"
      viewBox="0 0 80 80"
      transform="\${transform(rotate, flip)}"
    >
      <slot></slot>
      <g>
`
    for (variant in variants) {
      // const svg = fs.readFileSync(path.join(assetPath, variant, `${kebabCase(name)}.svg`), 'utf-8')
      const svg = variants[variant]
      const icon = await parse(svg)
      componentString += `\
      \${variant === "${variant}" && svg\`${
        await icon.children.reduce((p, child) => p.then(async (str) => {
          const res = ['path', 'rect', 'circle'].includes(child.name)
            ? `
        <${child.name}${Object.entries(child.attributes).map(([attr, val]) => `
          ${attr}='${(() => {
            switch (attr) {
              case 'stroke':
                // return '${colors[0]}'
              case 'stroke-width':
                return '${strokeWidth}'
              case 'stroke-linecap':
                return '${strokeLinecap}'
              case 'stroke-linejoin':
                return '${strokeLinejoin}'
              case 'fill':
                // return '${colors[0]}'
              case 'fill-opacity':
                // return '${colors[0]}'
              default:
                return val
            }
          })()}'\
        `).join('')}
        />`
            : `
        ${await stringify(child)}\
            `
          return Promise.resolve(str + res)
        }), Promise.resolve(''))
      }
      \`}
`
    }

    componentString += `\
      </g>
    </svg>
  \`
}

define('${tagName}', ${className})
export default ${className}
  `
    try {
      fs.writeFileSync(
        path.join(componentsPath, `${capitalize(camelCase(name))}.js`),
        componentString,
        {
          flag: 'w'
        }
      )
      passes += 1
    } catch (error) {
      console.log(error)
      fails += 1
    }
  }

  let indexString = ''

  for ({ name, variants } of components) {
    const className = `${startCase(setName)}${capitalize(camelCase(name))}`
    indexString += `\
export { default as ${className} } from './icons/${capitalize(camelCase(name))}'
`
  }

  try {
    fs.writeFileSync(indexPath, indexString, { flag: 'w' })
    fs.copyFileSync(path.join(__dirname, '../utils.js'), utilsPath)
  } catch (error) {
    console.log(error)
  }

  return Promise.resolve()
}
