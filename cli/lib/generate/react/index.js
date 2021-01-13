const fs = require('fs')
const path = require('path')
const util = require('util')
const { parse, stringify } = require('svgson')
const { kebabCase, startCase, camelCase, capitalize } = require('lodash')
const template = require('./template')

module.exports = async function wc ({ target, set, output, transform }) {
  const setName = set.split('/').reverse()[0]
  const assetPath = path.join(process.cwd(), set)
  const outputPath = path.join(process.cwd(), output)
  const componentsPath = path.join(outputPath, 'icons')
  const indexPath = path.join(outputPath, 'index.js')
  const utilsPath = path.join(outputPath, 'utils.js')

  if (fs.existsSync(outputPath)) {
    fs.rmdirSync(outputPath, { recursive: true })
  }
  fs.mkdirSync(outputPath)
  fs.mkdirSync(componentsPath)

  const components = require(`${assetPath}/components.json`)

  for ({ name, variants } of components) {
    const componentName = capitalize(camelCase(name))
    const className = startCase(setName) + componentName
    const tagName = `${kebabCase(setName)}-${kebabCase(name)}`
    const componentString = await template.component(variants, className)
    try {
      fs.writeFileSync(
        path.join(componentsPath, `${componentName}.jsx`),
        componentString,
        { flag: 'w' }
      )
    } catch (error) {
      console.log(error)
    }
  }

  const indexString = template.index({ setName, components })

  try {
    fs.writeFileSync(indexPath, indexString, { flag: 'w' })
    fs.copyFileSync(path.join(__dirname, '../utils/component-utils.js'), utilsPath)
  } catch (error) {
    console.log(error)
  }

  return Promise.resolve()
}
