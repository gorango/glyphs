module.exports = {
  generate: {
    target: 'vue',
    set: 'node_modules/@glyphs/core',
    output: 'src',
    defaultVariant: 'path',
    transform: {
      color: {
        path: 'stroke',
        bold: 'all',
        duo: 'both',
        outline: 'both',
        poly: 'color'
      },
      stroke: {
        path: 3,
        duo: 4,
        outline: 1
      }
    }
  }
}
