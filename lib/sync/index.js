const { camelCase } = require('lodash')
const axios = require('axios')
const retry = require('axios-retry')
const { Client: figmaClient } = require('figma-js')

const { validName, validType } = require('./validate')
const { findOne } = require('./node')
const compose = require('./compose')

module.exports = async function sync({ args, localConfig, iconsMap, progress }) {
  if (!args.key) { throw new Error('The file key is required') }
  if (!localConfig) { throw new Error(`File "${args.key}" not found`) }

  const personalAccessToken = localConfig.token
  const { client: figma } = figmaClient({ personalAccessToken })
  retry(axios)
  retry(figma, { retries: 3, retryCondition: error => retry.isNetworkOrIdempotentRequestError(error) })

  let progressVal = 0
  progress?.start(100, 0)
  setInterval(() => {
    progressVal = progressVal + 1
    progress?.update(progressVal)
  }, 3000)

  progress?.update(progressVal, { stage: 'Downloading Figma file...' })

  const file = await figma.get(`files/${args.key}`).then(({ data }) => data)
    .catch(err => {
      throw new Error(err)
    })

  progressVal = Math.max(progressVal, 6)
  progress?.update(progressVal, { stage: 'Parsing file...' })

  const page = file.document.children.find(({ id }) => id === localConfig.page)
  const iconsMeta = compose.iconsMeta(file, page)
  const setMeta = {
    key: args.key,
    name: localConfig.name,
    unique: iconsMeta.length,
    total: iconsMeta.reduce((sum, { variants }) => sum + Object.keys(variants).length, 0),
    variants: [
      ...new Set(
        iconsMeta
          .slice(0, 50)
          .reduce((arr, { variants }) => [
            ...arr,
            ...Object.keys(variants)
          ], [])
      )
    ],
    categories: page.children.reduce((obj, frame) => {
      return {
        ...obj,
        ...(!findOne(frame, ({ type, name }) => validType(type) && validName(name)) ? {} : {
          [camelCase(frame.name.trim())]: [...new Set(
            frame.children.filter(({ name, type }) => validType(type) && validName(name)).map(({ name }) => camelCase(name.trim()))
          )]
        })
      }
    }, {})
  }

  const { chunks, total: chunksTotal } = await compose.chunks(setMeta, iconsMeta, args, localConfig)
  progressVal = Math.max(progressVal, 10)
  progress?.update(progressVal, { stage: `Setting up ${chunksTotal} icons...` })

  let downloaded = 0

  await chunks.reduce(async (promise, icons) => {
    await promise

    const ids = icons.reduce((arr, { variants }) => [...arr, ...Object.values(variants)], []).join(',')
    const { images, err } = await figma.get(
      `images/${args.key}`,
      {
        params: {
          ids,
          format: 'svg'
        }
      }
    ).then(({ data }) => data).catch(err => ({ err }))

    if (err) {
      return Promise.reject(err)
    }

    const imageUrls = Object.values(images)
    const imageIds = Object.keys(images)
    const svgs = await Promise.all(imageUrls.map(url => axios.get(url).then(({ data }) => data)))

    await svgs.reduce(async (promise, svg, i) => {
      await promise
      const id = imageIds[i]
      iconsMap[id] = svg
      downloaded++
      const newProgress = downloaded / setMeta.total * 80 + 10
      progressVal = Math.min(progressVal, newProgress)
      progress?.update(progressVal, { stage: `${downloaded}/${chunksTotal} downloaded...` })
      return Promise.resolve()
    }, Promise.resolve())

    return Promise.resolve()
  }, Promise.resolve())

  progress?.update(100, { stage: 'Done' })
  progress?.stop()

  return Promise.resolve({
    setMeta,
    iconsMeta,
    iconsMap,
    file
  })
}
