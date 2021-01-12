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
import React, { forwardRef, useContext } from 'react'
import { transform } from '../utils'

const renderString = ({ size, variant, rotate, flip }) => {
  switch (variant) {
`
    for (variant in variants) {
      // const svg = fs.readFileSync(path.join(assetPath, variant, `${kebabCase(name)}.svg`), 'utf-8')
      const svg = variants[variant]
      const icon = await parse(svg)
      componentString += `\
    case '${variant}':
      return {${
        await icon.children.reduce((p, child) => p.then(async (str) => {
          const res = ['path', 'rect', 'circle'].includes(child.name)
            ? `
        <${child.name}${Object.entries(child.attributes).map(([attr, val]) => `
          ${attr}=${(() => {
            switch (attr) {
              case 'stroke':
                // return '{colors[0]}'
              case 'stroke-width':
                return '{strokeWidth}'
              case 'stroke-linecap':
                return '{strokeLinecap}'
              case 'stroke-linejoin':
                return '{strokeLinejoin}'
              case 'fill':
                // return '{colors[0]}'
              case 'fill-opacity':
                // return '{colors[0]}'
              default:
                return `'${val}'`
            }
          })()}\
        `).join('')}
        />`
          : `
        ${await stringify(child)}\
        `
        return Promise.resolve(str + res)
      }), Promise.resolve(''))
    }
      }
`
    }

    componentString += `\
  }
}

const ${className} = forwardRef((props, ref) => {
  const { size, variant, rotate, flip } = props

  return {
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width="{size || 40}"
      height="{size || 40}"
      transform="{transform(rotate, flip)}"
    >
      {children}
      <g>
        {renderString({ size, variant, rotate, flip })}
      </g>
    </svg>
  }
})

${className}.displayName = '${className}'

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
