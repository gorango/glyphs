const fs = require('fs')
const path = require('path')
const pug = require('pug')

module.exports = function preview (dataDir) {
  const setMetaPath = path.join(dataDir, 'set-meta.json')
  const iconsMapPath = path.join(dataDir, 'icons-map.json')
  const iconsMetaPath = path.join(dataDir, 'icons-meta.json')

  const filesExist = [fs.existsSync(setMetaPath), fs.existsSync(iconsMapPath)]
    .reduce((bool, exists) => bool && exists, true)

  if (!filesExist) {
    return null
  }

  const icons = require(iconsMapPath)
  const meta = require(iconsMetaPath)
  const { categories, variants } = require(setMetaPath)

  const first = Object.values(categories)[0][0]
  const input = path.join(__dirname, 'template.pug')
  const output = path.join(process.cwd(), 'preview.html')
  const file = pug.compileFile(input, { pretty: true })({ first, categories, variants, meta, icons })

  fs.writeFileSync(output, file)
  return file
}

