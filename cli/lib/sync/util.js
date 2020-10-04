const fs = require('fs')
const path = require('path')
const util = require('util')
const kebabCase = require('lodash.kebabcase')
const convert = require('color-convert')

const colors = require(path.join(__dirname, 'colors.json'))

module.exports = {
  getColor,
  createDir,
  saveJSON,
  saveSVG
}

function getColor (hex) {
  const colorName = hex.startsWith('#') ? convert.hex.keyword(hex) : hex

  let name, fullName
  Object.entries(colors).forEach(([category, colors]) => {
    Object.entries(colors).forEach(([color, hex]) => {
      if (!name && color.toLowerCase() === colorName) {
        name = category.toLowerCase()
        fullName = color.toLowerCase()
      }
    })
  })

  return [name, fullName]
}

async function createDir (dirName) {
  if (!fs.existsSync(dirName)) {
    return util.promisify(fs.mkdir)(path.join(process.cwd(), dirName))
  }
}

async function saveJSON (fileName, data) {
  return util.promisify(fs.writeFile)(path.join(process.cwd(), `${fileName}.json`), JSON.stringify(data, false, 2))
}

async function saveSVG (fileName, svgDir, dirName, data) {
  if (data) {
    return util.promisify(fs.writeFile)(path.join(process.cwd(), `${svgDir}/${dirName}/${kebabCase(fileName)}.svg`), data)
  }
}
