const Configstore = require('configstore')
const pkg = require('../package.json')

const conf = new Configstore(pkg.name)
const localConfigs = conf.all
const hasConfig = Boolean(Object.keys(localConfigs).length)

module.exports.conf = conf
module.exports.localConfigs = localConfigs
module.exports.hasConfig = hasConfig
