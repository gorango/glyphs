module.exports = {
  generate: {
    target: 'react',
    set: 'node_modules/@glyphs/core',
    output: 'src',
    defaultVariant: 'path',
    transform: {
      color: ['path', 'bold', 'duo', 'outline'],
      stroke: {
        path: 3,
        duo: 4,
        outline: 1
      }
    }
  }
}
