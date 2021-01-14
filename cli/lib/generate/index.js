const fs = require('fs')
const path = require('path')
const util = require('util')
const { parse, stringify } = require('svgson')
const { kebabCase, startCase, camelCase, upperFirst } = require('lodash')

const templates = {
  wc: require('./wc'),
  vue: require('./vue'),
  react: require('./react')
}

module.exports = async function wc ({ target, set, output }) {
  const setName = set.split('/').reverse()[0]
  const extension = { wc: 'js', vue: 'vue', react: 'jsx' }[target]
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
    const componentName = upperFirst(camelCase(name))
    const className = startCase(setName) + componentName
    const tagName = `${kebabCase(setName)}-${kebabCase(name)}`
    const componentString = await templates[target].component({ variants, className, tagName, set })
    try {
      fs.writeFileSync(
        path.join(componentsPath, `${componentName}.${extension}`),
        componentString,
        { flag: 'w' }
      )
    } catch (error) {
      console.log(error)
    }
  }

  const indexString = templates[target].index({ setName, components })

  try {
    fs.writeFileSync(indexPath, indexString, { flag: 'w' })
    fs.copyFileSync(path.join(__dirname, 'utils/component-utils.js'), utilsPath)
    if (target === 'vue') {
      fs.copyFileSync(path.join(__dirname, 'utils/vue-entry.js'), path.join(outputPath, 'entry.js'))
    }
  } catch (error) {
    console.log(error)
  }

  return Promise.resolve()
}
