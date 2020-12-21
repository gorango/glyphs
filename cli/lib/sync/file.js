const fs = require('fs')
const path = require('path')
const util = require('util')
const { kebabCase } = require('lodash')

module.exports = {
  createDir,
  saveJSON,
  saveSVG
}

async function createDir (dirName) {
  const dirPath = path.join(process.cwd(), dirName)
  if (!fs.existsSync(dirPath)) {
    return util.promisify(fs.mkdir)(dirPath)
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
