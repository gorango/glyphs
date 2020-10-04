#!/usr/bin/env node

const prompts = require('./lib/prompts')
const parse = require('./lib/parse')
const download = require('./lib/download')
const categories = require('./lib/categories')

const run = async () => {
  await prompts()
  await parse()
  await download()
  await categories()
  process.exit(0)
}

run()
