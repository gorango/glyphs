const fs = require('fs')
const path = require('path')
const util = require('util')
const { kebabCase } = require('lodash')

module.exports = {
  createDir,
  saveJSON,
  readJSON,
  saveSVG,
}

async function createDir (dirName) {
  const dirPath = path.join(process.cwd(), dirName)
  if (!fs.existsSync(dirPath)) {
    return util.promisify(fs.mkdir)(dirPath)
  }
}

async function saveJSON (fileName, data, space=0) {
  return util.promisify(fs.writeFile)(path.join(process.cwd(), `${fileName}.json`), JSON.stringify(data, null, space))
}

async function readJSON (fileName) {
  const result = await util.promisify(fs.readFile)(path.join(process.cwd(), fileName), 'utf-8')
  return JSON.parse(result)
}

async function saveSVG (fileName, svgDir, dirName, data) {
  if (data) {
    return util.promisify(fs.writeFile)(path.join(process.cwd(), `${svgDir}/${dirName}/${kebabCase(fileName)}.svg`), data)
  }
}
