module.exports = {
  generate: {
    target: 'vue',
    set: 'node_modules/@glyphs/brands',
    output: 'src',
    defaultVariant: 'color',
    transform: {
      color: ['path', 'solid'],
      stroke: {
        path: 2
      }
    }
  }
}
