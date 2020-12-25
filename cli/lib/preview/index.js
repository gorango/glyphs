const fs = require('fs')
const path = require('path')
const pug = require('pug')

module.exports = async function preview (dataDir) {
  const metaFile = path.join(dataDir, 'meta.json')
  const componentsFile = path.join(dataDir, 'components.json')
  const filesExist = [
    fs.existsSync(metaFile),
    fs.existsSync(componentsFile)
  ].reduce((bool, exists) => bool && exists, true)

  if (!filesExist) {
    console.log()
    console.log('  The files required to generate the preview have not been found')
    console.log('  Run "glyphs sync" to generate the required files')
    console.log()
    process.exit(1)
  }

  const meta = require(metaFile)
  const components = require(componentsFile)

  const { categories, variants } = meta
  const first = Object.values(categories)[0][0]
  const input = path.join(__dirname, 'template.pug')
  const output = path.join(process.cwd(), 'preview.html')
  const file = pug.compileFile(input, { pretty: true })({ first, categories, variants, components })

  fs.writeFileSync(output, file)
}

