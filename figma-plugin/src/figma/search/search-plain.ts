async function search ({ query, append, children, variants }) {
  figma.ui.postMessage({ type: 'loading', value: true })
  await new Promise(resolve => setTimeout(resolve, 100))

  const page = figma.currentPage
  const selection = append ? page.selection : []
  const types: any = ['PAGE', 'FRAME', 'COMPONENT', 'COMPONENT_SET', 'INSTANCE']
  const nodes = []

  if (children) {
    page.selection.forEach(node => visit(node))
  } else {
    visit(page)
  }

  function visit (node, parent = null, depth = 0) {
    if (depth > 3) return

    if (types.includes(node.type)) {
      if (query) {
        if (node.name.includes(query)) {
          if (variants) {
            if (parent.type === 'COMPONENT_SET') {
              nodes.push(node)
            }
          } else {
            parent.type !== 'COMPONENT_SET' && nodes.push(node)
          }
        }
      } else {
        if (variants && node.type === 'COMPONENT_SET') {
          nodes.push(node)
        } else if (!variants && node.type === 'COMPONENT' && parent.type !== 'COMPONENT_SET' && !node.name.startsWith('__')) {
          nodes.push(node)
        }
      }
      if ('children' in node && Array.isArray(node.children)) {
        node.children.forEach(child => visit(child, node, depth + 1))
      }
    }
  }

  function isChild (node, parent) {
    const { id } = node.parent || {}
    return id === parent.id || (node.parent.parent && isChild(node.parent, parent))
  }

  figma.currentPage.selection = [...selection, ...nodes]
  figma.viewport.scrollAndZoomIntoView(nodes)
  figma.ui.postMessage({ type: 'loading', value: false })
}

export default {
  search
}
