function removeSelected () {
  const selectedNodes: any = figma.currentPage.selection
  let newSelection = []
  selectedNodes.forEach((node: FrameNode) => {
    newSelection.push(node.parent)
    node.remove()
  })
  figma.currentPage.selection = newSelection
}

function toggleVisibility () {
  const selectedNodes: any = figma.currentPage.selection
  selectedNodes.forEach((node: any) => {
    const allVisible = node.children.reduce((b, { visible }) => b && visible, true)
    if (!allVisible) {
      node.children.forEach((child: any) => {
        child.visible = !child.visible
      })
    }
  })
}

function flattenVisible () {
  const selectedNodes: any = figma.currentPage.selection
  selectedNodes.forEach((node: any) => {
    const children = node.children.filter(({ visible }) => visible)
    // figma.flatten(children, node)
    children.forEach((child: any) => {
      figma.flatten([child], node)
    })
  })
  let selection = []
  selectedNodes.forEach((node: any) => {
    const children = node.children.filter(({ visible }) => visible)
    selection = selection.concat(children)
  })
  figma.currentPage.selection = selection
}

function flattenChildren () {
  const selectedNodes: any = figma.currentPage.selection
  selectedNodes.forEach((node: any) => {
    node.children.forEach((child: any) => {
      const newNode = child.clone()
      child.parent.appendChild(newNode)
      child.visible = false
    })
  })
  setTimeout(flattenVisible, 100)
}

function frameChildren (name = 'duo') {
  const selectedNodes: any = figma.currentPage.selection
  let newNodes = []
  selectedNodes.forEach((node: any) => {
    const parent = node.parent
    const index = parent.children.findIndex(({ id }) => id === node.id)
    const newNode = figma.createFrame()
    parent.insertChild(index + 1, newNode)
    newNode.x = node.x - ((80 - node.width) / 2)
    newNode.y = node.y - ((80 - node.height) / 2)
    newNode.name = `${name} / ${node.name}` // node.name
    newNode.resize(80, 80)
    newNode.appendChild(node)
    node.x = (80 - node.width) / 2
    node.y = (80 - node.height) / 2
    newNodes.push(newNode)
  })
  figma.currentPage.selection = newNodes
  figma.notify(`Duplicated ${newNodes.length} icons to paths.`, {timeout: 4000})
}

function unionSelected () {
  const selectedNodes: any = figma.currentPage.selection
  selectedNodes.forEach((node: any) => {
    console.log(node)
    const union = figma.union([node], node.parent, node.parent.children.findIndex(({ id }) => id === node.id))
    figma.currentPage.selection = [union]
  })
}

function newComponentSet () {
  const [selectedComponent]: any = figma.currentPage.selection
  const insertIndex = selectedComponent.parent.children.findIndex(({ id }) => id === selectedComponent.id)
  const alignY = 500
  const newComponents = []
  const variants: any = (() => {
    const config: any = figma.currentPage.findChild(({ name }) => name === 'Config')
    const variantsConfig = config && config.children.find(({ name, children }) => name === '__config' && children.find(({ characters }) => characters.toLowerCase() === 'variants'))
    const variants = !variantsConfig ? null : variantsConfig.children.find(({ name }) => name === 'value')
    return variants && variants.characters.split(',').map(v => v.trim())
  })()
  if (!variants) {
    throw new Error('No variants configuration found on page')
  }
  variants.reverse().forEach((style, i) => {
    const newComponent = figma.createComponent()
    newComponent.name = style
    newComponent.x = selectedComponent.x - ((80 - selectedComponent.width) / 2)
    newComponent.y = alignY + (i * 100)
    newComponent.resizeWithoutConstraints(80, 80)
    newComponent.appendChild(selectedComponent.createInstance())
    newComponents.push(newComponent)
  })
  const componentSet: any = figma.combineAsVariants(newComponents, selectedComponent.parent, insertIndex)
  componentSet.name = selectedComponent.name.replace('_', '')
  componentSet.x = selectedComponent.x - ((80 - selectedComponent.width) / 2)
  componentSet.y = alignY
  figma.currentPage.selection = componentSet.children
  centerChildren()
  figma.currentPage.selection = [componentSet]
}

function centerChildren () {
  const selectedNodes: any = figma.currentPage.selection
  selectedNodes.forEach((node: any) => {
    node.children.forEach((child: any) => {
      // const rotation = child.rotation
      // child.rotation = 0
      child.x = (node.width - child.width) / 2
      child.y = (node.height - child.height) / 2
      // setTimeout(() => {
      //   child.rotation = rotation
      // }, 2000)
    })
  })
}

function sortSelected () {
  const selectedNodes: any = figma.currentPage.selection
  const parent = selectedNodes[0].parent
  const indices = selectedNodes.map((node: any) => {
    const index = node.parent.children.findIndex(({ id }) => id === node.id)
    // console.log(node)
    let [[_, __, x], [___, ____, y]] = node.absoluteTransform
    x = x - (node.width / 2)
    y = y - (node.height / 2)
    return [node, index, x, y]
  })
  const startIndex = Math.min(...indices.map(([node, index]) => index))
  indices.sort(([an, ai, ax, ay], [bn, bi, bx, by]) => {
    const ydiff = ay - by
    const xdiff = ax - bx
    if (Math.abs(xdiff) > 40) {
      // console.log('y:', ydiff)
      // if (Math.abs(ydiff) > 40) {
      //   return ydiff
      // }
      return xdiff
    }
    if (Math.abs(ydiff) > 40) {
      // console.log('x:', xdiff)
      // if (Math.abs(xdiff) > 40) {
      //   return xdiff
      // }
      return ydiff
    }
    return 0
  }).forEach(([node, index], i) => {
    // const node = parent.children[index]
    parent.insertChild(startIndex + i, node)
    // const newIndex = sorted[i]
    // node.parent.insertChild(sorted[i][0], node)
  })
}

export default {
  removeSelected,
  toggleVisibility,
  flattenChildren,
  frameChildren,
  unionSelected,
  newComponentSet,
  centerChildren,
  sortSelected,
}
