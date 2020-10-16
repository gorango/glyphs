const pug = require('pug')
const fs = require('fs')
const path = require('path')

const { categories, variants } = require('../data/meta.json')

const icon = Object.values(categories)[0][0]

const input = path.join(__dirname, './index-template.pug')
const output = path.join(__dirname, '../src/index.html')

const file = pug.compileFile(input)({ icon, categories, variants })

fs.writeFileSync(output, file)
