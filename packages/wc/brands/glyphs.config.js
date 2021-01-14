module.exports = {
  generate: {
    target: 'wc',
    set: 'node_modules/@glyphs/brands',
    output: 'src',
    defaultVariant: 'color',
    transform: {
      replaceColor: ['path', 'solid'],
      removeStroke: ['path']
    }
  }
}
