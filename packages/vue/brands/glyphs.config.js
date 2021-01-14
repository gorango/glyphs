module.exports = {
  generate: {
    target: 'vue',
    set: 'node_modules/@glyphs/brands',
    output: 'src',
    defaultVariant: 'color',
    transform: {
      replaceColor: ['path', 'solid'],
      removeStroke: ['path']
    }
  }
}
