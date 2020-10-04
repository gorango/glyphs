const Configstore = require('configstore')
const Figma = require('figma-api')
const Svgo = require('svgo')
const pretty = require('pretty')
const { parse, stringify } = require('svgson')
const rp = require('request-promise')
const camelCase = require('lodash.camelcase')
const { createDir, saveSVG, saveJSON, getColor } = require('./util')
const {fill} = require('lodash')

const conf = new Configstore(require('../../package.json').name)
const REPLACE_CURRENT_COLOR = ['path', 'stroke', 'outline', 'solid', 'fill', 'mono', 'duo']

module.exports = async function ({ name: set, svg: svgDir, data: dataDir }, progress) {
  const iconSet = await conf.get(set)
  const fileKey = iconSet.key
  const personalAccessToken = iconSet.token
  const api = new Figma.Api({ personalAccessToken })

  const components = iconSet.components
  const targets = Object.keys(components)
  const totalTargets = Object.entries(components).map(([key, { variants }]) => Object.keys(variants)).reduce((sum, n) => sum + n.length, 0)
  const averageVariants = totalTargets / targets.length
  const chunkSize = 400 / averageVariants
  const chunkedTargets = Array(Math.ceil(targets.length / chunkSize)).fill().map((_, i) => i * chunkSize).map(start => targets.slice(start, start + chunkSize))
  // break up the icons into smaller chunks for rate limits in Figma api
  await chunkedTargets.reduce((promise, targets, i) => {
    return promise.then(async (obj) => {
      const indexMap = targets.reduce((obj, name) => ({
        ...obj,
        ...Object.entries(components[name].variants)
        .reduce((obj, [variant, id]) => ({ ...obj, [id]: `${name} ${variant}` }), {})
      }), {})
      const ids = targets.reduce((arr, name) => [...arr, ...Object.values(components[name].variants)], [])
      let progressVal = 10 + (i * (80 / chunkedTargets.length)) + 3
      progress.update(progressVal, {
        stage: `Preparing ${ids.length} icons...`
      })
      const getImageConfig = {
        ids,
        format: 'svg',
        use_absolute_bounds: true,
        // svg_simplify_stroke: true
      }
      const { images, err } = await api.getImage(fileKey, getImageConfig).catch(err => ({ err: err.message }))
      if (err) {
        const names = targets.reduce((arr, name) => [...arr, name], [])
        console.log(names)
        return new Promise.reject(err)
      } else {
        progressVal = progressVal + 3
        progress.update(progressVal, {
          stage: `Downloading ${ids.length} icons...`
        })
      }
      const icons = await (
        await Promise.all(Object.entries(images)
          .map(([id, url]) => rp(url)))
        )
        .reduce((p, body, i) => {
          return p.then(async obj => {
            const [id, url] = Object.entries(images)[i]
            const [name, variant] = indexMap[id].split(' ')
            const svg = body ? await parse(body) : null
            // const svg = body || null
            await createDir(`${svgDir}/${variant}`)
            if (!(i % Math.round(ids.length / chunkSize))) {
              progressVal = progressVal + 0.1
            }
            progress.update(progressVal)

            components[name].variants[variant] = {
              id: components[name].variants[variant],
              source: `https://www.figma.com/file/${fileKey}/icons.fyi?node-id=${id}`,
              url,
              svg
            }
          })
        }, Promise.resolve({}))

      return new Promise((resolve, reject) => {
        err ? reject(err) : setTimeout(resolve, 0, {...obj, ...icons})
      })
    })
  }, Promise.resolve()).catch(console.log)

  progress.update(85, {
    stage: 'Finalizing components...'
  })

  // flatten categories & terms in components
  Object.keys(components).forEach(key => {
    const component = components[key]
    // sort categories with primary first
    components[key].categories = Object.entries(component.categories)
      .sort(([_catA, boolA], [_catB, boolB]) => boolA || boolB)
      .map(([category]) => category)
    components[key].terms = Object.keys(component.terms)
  })
  Object.entries(components).forEach(([name, { variants }]) => {
    Object.entries(variants).forEach(async ([variant, { svg }]) => {
      if (!svg) {
        return
      }
      removeUnused(svg)
      if (REPLACE_CURRENT_COLOR.includes(variant)) {
        applyCurrentColor(svg)
      } else {
        applyColorVars(svg)
      }
      const body = svg && pretty(stringify(svg))
      components[name].variants[variant].svg = body
      await saveSVG(name, svgDir, variant, body)
    })
  })

  function removeUnused (node) {
    if (node.name === 'svg') {
      delete node.attributes.width
      delete node.attributes.height
      delete node.attributes.xmlns
    }
  }

  function applyCurrentColor (node) {
    if (node.children) {
      node.children.forEach(applyCurrentColor)
    }
    if (node.attributes) {
      if (propIsValid(node.attributes.fill)) {
        node.attributes.fill = 'currentColor'
      }
      if (propIsValid(node.attributes.stroke)) {
        node.attributes.stroke = 'currentColor'
      }
    }
  }

  function applyColorVars (node) {
    if (node.children) {
      node.children.forEach(applyColorVars)
    }
    if (node.attributes) {
      if (propIsValid(node.attributes.fill)) {
        const [name, fullName] = getColor(node.attributes.fill)
        const c = node.attributes.class
        const classList = c && c.length ? c.split(' ') : []
        node.attributes.class = classList.concat(`fill-${name}`).join(' ')
        // node.attributes.fill = fullName
      }
      if (propIsValid(node.attributes.stroke)) {
        const [name, fullName] = getColor(node.attributes.stroke)
        const c = node.attributes.class
        const classList = c && c.length ? c.split(' ') : []
        node.attributes.class = classList.concat(`stroke-${name}`).join(' ')
        // node.attributes.stroke = fullName
      }
    }
  }

  function propIsValid (prop) {
    return prop && prop !== 'none' && !prop.startsWith('url')
  }

  progress.update(90, {
    stage: 'Saving components...'
  })

  await saveJSON(`${dataDir}/components`, components)
}
