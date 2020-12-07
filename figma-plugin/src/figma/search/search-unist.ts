import * as visit from 'unist-util-visit'
import * as is from 'unist-util-is'

async function search ({ query, append, children, /* variants */ }) {
  figma.ui.postMessage({ type: 'loading', value: true })
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const page = figma.currentPage
  const selection = append ? page.selection : []
  const nodes = []
  
  visit(page, test, filter, true)

  function test (node) {
    const types: any = ['PAGE', 'FRAME', 'COMPONENT', 'COMPONENT_SET', 'INSTANCE']
    // return types.includes(node.type)
    return is(node, types)
  }

  function filter (node, index, parent) {
    const match = node.name.includes(query)
    if (match) {
      nodes.push(node)
    }
    if (!match && node.type === 'COMPONENT_SET') {
      const found = node.children.find(({ name }) => name.includes(query))
      found && nodes.push(found)
    }
  }
  
  figma.currentPage.selection = [...selection, ...nodes]
  figma.viewport.scrollAndZoomIntoView(nodes)
  figma.ui.postMessage({ type: 'loading', value: false })
}

export default {
  search
}
