async function search ({ query, append, children, /* variants */ }) {
  figma.ui.postMessage({ type: 'loading', value: true })
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const page = figma.currentPage
  const selection = append ? page.selection : []
  const types: any = ['PAGE', 'FRAME', 'COMPONENT', 'COMPONENT_SET', 'INSTANCE']
  
  let variants = []
  const nodes = page.findAll(node => {
    const parent = !children ? true : page.selection.reduce((bool, selectedNode) => bool || node.parent === selectedNode, false)
    if (!parent) return false
    const type = node.type === 'FRAME' || node.type === 'COMPONENT' || node.type === 'COMPONENT_SET' || node.type === 'INSTANCE'
    if (!type) return false
    const match = node.name.includes(query)
    if (!match && node.type === 'COMPONENT_SET') {
      const found = node.children.find(({ name }) => name.includes(query))
      found && variants.push(found)
    }
    if (!match) return false
    return type && parent && match
  })

  figma.currentPage.selection = [...selection, ...nodes, ...variants]
  figma.viewport.scrollAndZoomIntoView(nodes)
  figma.ui.postMessage({ type: 'loading', value: false })
}

export default {
  search
}
