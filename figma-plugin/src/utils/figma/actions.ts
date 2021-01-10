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

function toggleForExport () {
  const componentSets: any = figma.currentPage.selection
  componentSets.forEach(componentSet => {
    if (componentSet.type !== 'COMPONENT_SET') {
      return
    }
    componentSet.children.forEach(variant => {
      const allVisible = variant.children.reduce((b, { visible }) => b && visible, true)
      if (!allVisible) {
        variant.children.forEach(layer => {
          layer.visible = !layer.visible
        })
      }
    })
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

function circleChildren (name = 'duo') {
  const selectedNodes: any = figma.currentPage.selection
  selectedNodes.forEach((node: any) => {
    figma.group(node.children, node)
    const circ = figma.createEllipse()
    circ.resize(80, 80)
    circ.isMask = true
    node.insertChild(0, circ)
  })
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
  const selectedComponents: any = figma.currentPage.selection
  selectedComponents.forEach(selectedComponent => {
    const insertIndex = selectedComponent.parent.children.findIndex(({ id }) => id === selectedComponent.id)
    const alignY = 600
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
    variants.forEach((style, i) => {
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
    _addAutoLayout(componentSet)
    figma.currentPage.selection = componentSet.children
    centerChildren()
    figma.currentPage.selection = [componentSet]
  })
}

function centerChildren () {
  const selectedNodes: any = figma.currentPage.selection
  selectedNodes.forEach((node: any) => {
    node.children.forEach((child: any) => {
      child.x = (node.width - child.width) / 2
      child.y = (node.height - child.height) / 2
    })
  })
}

function sortSelected () {
  const selectedNodes: any = figma.currentPage.selection
  const parent = selectedNodes[0].parent
  const indices = selectedNodes.map((node: any) => {
    const index = node.parent.children.findIndex(({ id }) => id === node.id)
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
      return xdiff
    }
    if (Math.abs(ydiff) > 40) {
      return ydiff
    }
    return 0
  }).forEach(([node, index], i) => {
    parent.insertChild(startIndex + i, node)
  })
}

function _addAutoLayout (node) {
  let selectedNodes: any
  if (node) selectedNodes = [node]
  else selectedNodes = figma.currentPage.selection
  selectedNodes.forEach(node => {
    console.log(node)
    node.layoutMode = 'VERTICAL'
    node.primaryAxisAlignItems = 'CENTER'
    node.counterAxisAlignItems = 'CENTER'
    node.itemSpacing = 20
    node.paddingTop = 0
    node.paddingLeft = 0
    node.paddingBottom = 0
    node.paddingRight = 0
  })
}

export default {
  removeSelected,
  toggleVisibility,
  toggleForExport,
  flattenChildren,
  frameChildren,
  circleChildren,
  unionSelected,
  newComponentSet,
  centerChildren,
  sortSelected,
}
