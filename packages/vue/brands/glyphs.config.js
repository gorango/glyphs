module.exports = {
  generate: {
    target: 'vue',
    set: 'node_modules/@glyphs/brands',
    output: 'src',
    transform: {
      replaceColor: ['path', 'solid'],
      removeStroke: ['path']
    }
  }
}
