const camelCase = require('lodash.camelcase')
const Configstore = require('configstore')
const { saveJSON } = require('./util')

const conf = new Configstore(require('../../package.json').name)

module.exports = async function ({ name: set, data: dataDir }, progress) {
  progress.update(95, {
    stage: 'Saving categories...'
  })
  const iconSet = await conf.get(set)
  const variants = iconSet.variants
  const file = iconSet.file.curr
  if (!file) {
    throw new Error('Source file not found')
  }
  const icons = file.document.children.filter(({ name }) => ['icons'].includes(name.toLowerCase()))
  const frames = icons.reduce((arr, { children }) => [...arr, ...children], [])
  const categories = frames.reduce((obj, frame) => {
    const target = '_ /'
    const types = ['COMPONENT', 'INSTANCE']
    const children = (frame.children || [])
    .filter(({ name, type }) => types.includes(type) && !name.includes('/'))
    if (!children.length) { return obj }
    return {
      ...obj,
      [camelCase(frame.name.trim())]: children
      .map(component => camelCase(component.name.trim()))
      .filter((name, i, arr) => arr.indexOf(name) === i) // filter out duplicates
    }
  }, {})
  const meta = {
    categories,
    variants
  }
  await saveJSON(`${dataDir}/meta`, meta)
  progress.update(100, {
    stage: 'Done'
  })
  progress.stop()
}
