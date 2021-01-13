module.exports = {
  generate: {
    target: 'wc',
    set: 'node_modules/@glyphs/brands',
    output: 'src',
    transform: {
      replaceColor: ['path', 'solid'],
      removeStroke: ['path']
    }
  }
}
