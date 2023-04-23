module.exports = {
  generate: {
    target: 'react',
    set: 'node_modules/@glyphs/flags',
    output: 'src',
    defaultVariant: 'circle',
    transform: {
      ratios: {
        variants: {
          rectangle: 3 / 2
        }
      }
    }
  }
}
