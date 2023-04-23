module.exports = {
  generate: {
    target: 'wc',
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
