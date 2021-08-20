const fs = require('fs')
const path = require('path')
const pug = require('pug')

module.exports = function preview (dataDir) {
  const mapPath = path.join(dataDir, 'map.json')
  const metaPath = path.join(dataDir, 'meta.json')
  const componentsPath = path.join(dataDir, 'components.json')
  const filesExist = [
    fs.existsSync(metaPath),
    fs.existsSync(componentsPath)
  ].reduce((bool, exists) => bool && exists, true)

  if (!filesExist) {
    return null
  }

  const map = require(mapPath)
  const meta = require(metaPath)
  const components = require(componentsPath)

  const { categories, variants } = meta
  const first = Object.values(categories)[0][0]
  const input = path.join(__dirname, 'template.pug')
  const output = path.join(process.cwd(), 'preview.html')
  const file = pug.compileFile(input, { pretty: true })({ first, categories, variants, components, map })

  fs.writeFileSync(output, file)
  return file
}

