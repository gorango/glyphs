function selectHidden () {
  const selectedNodes: any = figma.currentPage.selection
  let newSelection = []
  selectedNodes.forEach((node: FrameNode) => {
    node.children.forEach((node: any) => {
      if (!node.visible) {
        newSelection.push(node)
      }
    })
  })
  figma.currentPage.selection = newSelection
}

function selectVisible () {
  const selectedNodes: any = figma.currentPage.selection
  let newSelection = []
  selectedNodes.forEach((node: FrameNode) => {
    node.children.forEach((node: any) => {
      if (node.visible) {
        newSelection.push(node)
      }
    })
  })
  figma.currentPage.selection = newSelection
}

function selectNext () {
  const selection: any = figma.currentPage.selection
  let newSelection = []
  selection.forEach((node: any) => {
    const parent = node.parent
    const selectedChildren = parent.findAll(({ id }) =>
      selection.findIndex(({ id: _id }) => _id === id) > -1)
    if (selectedChildren.length > 1) {
      newSelection.push(parent.children[0])
      return
    }
    const i = parent.children.findIndex(({ id }) => id === node.id)
    const nextIndex = i === (parent.children.length - 1) ? 0 : i + 1
    const nextNode = parent.children[nextIndex]
    newSelection.push(nextNode)
  })
  figma.currentPage.selection = newSelection
}

function selectParent () {
  const selectedNodes: any = figma.currentPage.selection
  let newSelection = []
  selectedNodes.forEach((node: FrameNode) => {
    newSelection.push(node.parent)
  })
  figma.currentPage.selection = newSelection
}

export default {
  selectHidden,
  selectVisible,
  selectNext,
  selectParent,
}
