const Configstore = require('configstore')
const pkg = require('../package.json')

const conf = new Configstore(pkg.name)
const configs = conf.all
const hasConfig = Object.keys(configs).length

module.exports.conf = conf
module.exports.configs = configs
module.exports.hasConfig = hasConfig
