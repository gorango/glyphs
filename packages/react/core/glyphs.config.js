module.exports = {
  generate: {
    target: 'react',
    set: 'node_modules/@glyphs/core',
    output: 'src',
    transform: {
      replaceColor: ['path', 'bold', 'duo', 'outline'],
      removeStroke: ['path', 'duo', 'outline']
    }
  }
}
