function arrange ({ cols, gutter }) {
  cols = Number(cols)
  gutter = Number(gutter)
  const selectedNodes: any = figma.currentPage.selection
  const nodes = [...selectedNodes]
  const chunks = Array(Math.ceil(nodes.length / cols))
    .fill(null)
    .map((_, i) => i * cols)
    .map(start => nodes.slice(start, start + cols))
  const [ox, oy] = [nodes[0].x, nodes[0].y]
  chunks.forEach((row, y) => {
    row.forEach((node, x) => {
      const nx = (x * ((node.width) + gutter)) + ox
      const ny = (y * ((node.height) + gutter)) + oy
      node.x = nx
      node.y = ny
    })
  })
  figma.viewport.scrollAndZoomIntoView(selectedNodes)
}

export default {
  arrange
}
