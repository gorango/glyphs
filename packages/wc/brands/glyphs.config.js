module.exports = {
  generate: {
    target: 'wc',
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
