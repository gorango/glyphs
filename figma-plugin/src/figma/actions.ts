import { component } from "node_modules/vue/types/umd"

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

function variantsComponentSet (selectionChunk) {
  const selection: any = selectionChunk || figma.currentPage.selection

  const size = 3
  if (selection.length > size) {
    const sortedNodes = selection
      .map((node: any) => {
        let [[_, __, x], [___, ____, y]] = node.absoluteTransform
        return [
          node, 
          (x - (node.width / 2)), 
          (y - (node.height / 2))
        ]
      })
      .sort(([an, ax, ay], [bn, bx, by]) => {
        const ydiff = ay - by
        const xdiff = ax - bx
        if (Math.abs(xdiff) > 40) return xdiff
        if (Math.abs(ydiff) > 40) return ydiff
        return 0
      })
      .map(([node]) => node)
    const chunks = Array(sortedNodes.length / size).fill(null).map((_, i) => i * size).map(start => sortedNodes.slice(start, start + size))
    chunks.forEach(variantsComponentSet)
    return
  }
  
  const firstComponent = [...selection].sort(({ y: y1 }, { y: y2 }) => y1 - y2)[0]
  console.log(firstComponent)
  const componentName: any = firstComponent.children[0].name
  const position = { x: firstComponent.x, y: firstComponent.y }
  const parent = firstComponent.parent
  const insertIndex = parent.children.findIndex(({ id }) => id === firstComponent.id)
  const newComponents = []
  
  selection.forEach((node, i) => {
    const component = figma.createComponent()
    component.resizeWithoutConstraints(node.width, node.height)
    component.x = firstComponent.x
    component.y = firstComponent.y + (i * 100)
    component.name = node.name.split('/')[0].trim()
    component.appendChild(node)
    // node.parent.insertChild(0, component)
    newComponents.push(component)
  })

  // figma.currentPage.selection = newComponents
  const componentSetNode: any = figma.combineAsVariants(newComponents, parent, insertIndex)
  componentSetNode.name = componentName
  componentSetNode.x = position.x
  componentSetNode.y = position.y
  // componentSetNode.layoutMode = 'VERTICAL'
  // componentSetNode.layoutMode = 'VERTICAL'
  // componentSetNode.itemSpacing = 20
  figma.currentPage.selection = componentSetNode.children
  centerChildren()
  sortSelected()
}

function newComponentSet () {
  const [selectedComponent]: any = figma.currentPage.selection
  const insertIndex = selectedComponent.parent.children.findIndex(({ id }) => id === selectedComponent.id)
  const alignY = 500
  const newComponents = []
  ;['duo', 'path', 'outline', 'bold', 'poly'].forEach((style, i) => {
    const newComponent = figma.createComponent()
    newComponent.name = style
    newComponent.x = selectedComponent.x - ((80 - selectedComponent.width) / 2)
    newComponent.y = alignY + (i * 100)
    newComponent.resizeWithoutConstraints(80, 80)
    // console.log(newComponent)
    newComponent.appendChild(selectedComponent.createInstance())
    newComponents.push(newComponent)
  })
  const componentSet: any = figma.combineAsVariants(newComponents, selectedComponent.parent, insertIndex)
  componentSet.name = selectedComponent.name
  componentSet.x = selectedComponent.x - ((80 - selectedComponent.width) / 2)
  componentSet.y = alignY
  figma.currentPage.selection = componentSet.children
  centerChildren()
  figma.currentPage.selection = [componentSet]
}

function unionSelected () {
  const selectedNodes: any = figma.currentPage.selection
  selectedNodes.forEach((node: any) => {
    const parent = node.parent
    const insertIndex = parent.children.findIndex(({ id }) => id === node.id)
    // figma.union([node], node.parent, node.parent.children.findIndex(({ id }) => id === node.id))
    const frame: FrameNode = figma.createFrame()
    frame.resizeWithoutConstraints(node.width, node.height)
    frame.backgrounds = []
    frame.x = node.x
    frame.y = node.y
    frame.appendChild(node)
    // node.constraints = 'SCALE'
    console.log(node.constraints)
    node.constraints = {
      horizontal: 'SCALE',
      vertical: 'SCALE'
    }
    node.x = 0
    node.y = 0
    // console.log(parent.name)
    parent.insertChild(insertIndex, frame)
  })
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
  variantsComponentSet,
  newComponentSet,
  unionSelected,
  centerChildren,
  sortSelected,
}
