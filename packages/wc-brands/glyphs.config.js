module.exports = {
  generate: {
    target: 'wc',
    set: 'node_modules/@glyphs/brands',
    output: 'src',
    defaultVariant: 'solid',
    transform: {
      color: {
        path: 'stroke',
        solid: 'all'
      },
      stroke: {
        path: 2
      }
    }
  }
}
