const { green, red } = require('chalk')

const banner = '*'

const logBanner = green(banner)
const warnBanner = red(banner)

module.exports.log = function (text = '', indent = 0) {
  const space = '  '.repeat(indent)
  const line = space + text
  console.log(line)
}

module.exports.info = function (msg) {
  console.log(msg ? ` ${logBanner} ${msg}` : '')
}

module.exports.warn = function (msg) {
  console.warn(msg ? ` ${warnBanner} ⚠️  ${msg}\n` : '')
}

module.exports.fatal = function (error) {
  const msg = error.message
  console.error(msg ? ` ${warnBanner} ⚠️  ${msg}` : '')
  process.env.NODE_ENV === 'dev' && console.error(error)
  process.exit(1)
}
