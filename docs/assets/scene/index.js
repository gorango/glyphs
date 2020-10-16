const fs = require('fs')
const { parse, stringify } = require('svgson')

const dir = fs.readdirSync('./')
const split = a => a.split('-')[1].split('.')[0]
const files = dir
  .filter(file => /.svg$/.test(file))
  .sort((a, b) => split(a) - split(b))

files.forEach(async f => {
  const file = fs.readFileSync(f, 'utf-8')
  const svg = await parse(file)
  all(svg)
  console.log(f)
  console.log(svg)
  fs.writeFileSync(`./scene/${f}`, stringify(svg))
})

function all (node) {
  if (node.children) {
    node.children.forEach(all)
  }
  if (node.attributes) {
    if (node.attributes.fill && node.attributes.fill !== 'none') {
      node.attributes.fill = 'currentColor'
    }
    if (node.attributes.stroke && node.attributes.stroke !== 'none') {
      node.attributes.stroke = 'currentColor'
    }
  }
}
