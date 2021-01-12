const wc = require('./wc')
const vue = require('./vue')
const react = require('./react')

const targets = { wc, vue, react }

module.exports = async function generate (config) {
  await targets[config.target](config)
}