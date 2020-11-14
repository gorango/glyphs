figma.showUI(__html__, {
  width: 320,
  height: 380
})

figma.ui.onmessage = msg => fns[msg.type](msg)

// console.log(figma.currentPage)
// figma.on('selectionchange', () => {
//   console.log(figma.currentPage.selection)
// })

const fns = {
  selectChildFrames ({ value: query }) {
    const selectedNodes = figma.currentPage.selection
    let newSelection = []
    selectedNodes.forEach((node: any) => {
      const nodes: any = node.findAll(n => n.type === 'FRAME' && n.name.startsWith(query))
      newSelection = newSelection.concat(nodes)
    })
    figma.currentPage.selection = newSelection
    figma.viewport.scrollAndZoomIntoView(newSelection)
    figma.notify(`${newSelection.length}`, {timeout: 4000})
  },

  selectAllFrames ({ value: query }) {
    const page = figma.currentPage
    let nodes: any
    if (query) {
      nodes = page.findAll(n => (n.type === 'FRAME' || n.type === 'COMPONENT' || n.type === 'INSTANCE') && n.name.startsWith(query))
    } else {
      nodes = page.findAll(n => n.type === 'COMPONENT' && !['_', '-', '*'].reduce((bool, char) => bool || n.name.startsWith(char), false))
    }
    figma.currentPage.selection = [...figma.currentPage.selection, ...nodes]
    figma.viewport.scrollAndZoomIntoView(nodes)
    figma.notify(`${nodes.length}`, {timeout: 4000})
  },

  selectRoots ({ value: query }) {
    console.log()
    const page = figma.currentPage
    let nodes: any
    nodes = page.findAll(n => (n.parent.type === 'FRAME' && n.type === 'COMPONENT') && n.name.startsWith('_'))
    console.log(nodes)
    figma.currentPage.selection = [...figma.currentPage.selection, ...nodes]
    figma.viewport.scrollAndZoomIntoView(nodes)
    figma.notify(`${nodes.length}`, {timeout: 4000})
  },

  cloneToTarget ({ value: target }) {
    const selectedNodes = figma.currentPage.selection
    let newSelection = []
    selectedNodes.forEach((node: any) => {
      const newNode = node.createInstance()
      const newParent = node.parent.findChild(({ name }) => 
        name.startsWith(target) && name.split('/').reverse()[0].trim() === newNode.name.split('/').reverse()[0].trim())
      newParent.appendChild(newNode)
      newNode.x = (newParent.width - newNode.width) / 2
      newNode.y = (newParent.height - newNode.height) / 2
      newSelection.push(newNode)
    })
    figma.currentPage.selection = newSelection
    // figma.viewport.scrollAndZoomIntoView(newSelection)
  },
  
  duplicateSelected () {
    const nodes: any = figma.currentPage.selection
    let newNodes = []
    nodes.forEach((node: FrameNode) => {
      const parent = node.parent
      const index = parent.children.findIndex(({ id }) => id === node.id)
      const newNode = node.clone()
      parent.insertChild(index + 1, newNode)
      newNode.y = node.y + 400
      newNodes.push(newNode)
    })
    figma.currentPage.selection = newNodes
    // figma.currentPage.selection = [...figma.currentPage.selection, ...newNodes]
    figma.notify(`Duplicated ${newNodes.length} icons to paths.`, {timeout: 4000})
  },
  
  frameSelected () {
    const selectedNodes: any = figma.currentPage.selection
    let newNodes = []
    selectedNodes.forEach((node: any) => {
      console.log(node)
      console.log(node.relativeTransform)
      // console.log(node.scaleFactor, node.rotation)
      const parent = node.parent
      const index = parent.children.findIndex(({ id }) => id === node.id)
      const newNode = figma.createFrame()
      parent.insertChild(index + 1, newNode)
      newNode.x = node.x
      newNode.y = node.y
      newNode.name = node.name
      newNode.resize(80, 80)
      newNode.appendChild(node)
      node.x = (80 - node.width) / 2
      node.y = (80 - node.height) / 2
      newNodes.push(newNode)
    })
    figma.currentPage.selection = newNodes
    // figma.currentPage.selection = [...figma.currentPage.selection, ...newNodes]
    figma.notify(`Duplicated ${newNodes.length} icons to paths.`, {timeout: 4000})
  },
  
  flattenVisible () {
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
    figma.notify(`Flattened ${selectedNodes.length} icons to paths.`, {timeout: 4000})
  },
  
  flattenAll () {
    const selectedNodes: any = figma.currentPage.selection
    let parent
    selectedNodes.forEach((node: any) => {
      if (!parent) {
        parent = node.parent
      }
      if (!node.visible) {
        node.remove()
      } else {
        figma.flatten([node], parent)
      }
    })
    figma.currentPage.selection = [parent]
  },
  
  flattenChildren () {
    const selectedNodes: any = figma.currentPage.selection
    selectedNodes.forEach((node: any) => {
      node.children.forEach((child: any) => {
        const newNode = child.clone()
        child.parent.appendChild(newNode)
        child.visible = false
      })
    })
    setTimeout(this.flattenVisible, 100)
  },

  toggleVisibility () {
    const selectedNodes: any = figma.currentPage.selection
    selectedNodes.forEach((node: any) => {
      const allVisible = node.children.reduce((b, { visible }) => b && visible, true)
      if (!allVisible) {
        node.children.forEach((child: any) => {
          child.visible = !child.visible
        })
      }
    })
  },
  
  centerChildren () {
    const selectedNodes: any = figma.currentPage.selection
    selectedNodes.forEach((node: any) => {
      node.children.forEach((child: any) => {
        const rotation = child.rotation
        child.rotation = 0
        child.x = (node.width - child.width) / 2
        child.y = (node.height - child.height) / 2
        console.log(child)
        setTimeout(() => {
          child.rotation = rotation
        }, 2000)
      })
    })
  },
  
  unionChildren () {
    const selectedNodes: any = figma.currentPage.selection
    selectedNodes.forEach((node: FrameNode) => {
      figma.union(node.children, node)
    })
    // figma.currentPage.selection = [...figma.currentPage.selection, ...selectedNodes]
    figma.notify(`Unioned ${selectedNodes.length} icons to paths.`, {timeout: 4000})
  },
  
  selectNext () {
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
  },

  copySelected () {
    const selectedNodes = figma.currentPage.selection
  },
  
  pasteCopy () {
    const selectedNodes = figma.currentPage.selection
  },
  
  removeSelected () {
    const selectedNodes: any = figma.currentPage.selection
    let newSelection = []
    selectedNodes.forEach((node: FrameNode) => {
      newSelection.push(node.parent)
      node.remove()
    })
    figma.currentPage.selection = newSelection
  },
  
  selectVisible () {
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
  },
  
  selectHidden () {
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
  },
  
  removeHidden () {
    const selectedNodes: any = figma.currentPage.selection
    let removed = 0
    selectedNodes.forEach((node: FrameNode) => {
      node.children.forEach((node: any) => {
        if (!node.visible) {
          node.remove()
          removed += 1
        }
      })
    })
    figma.notify(`Removed ${removed} icons to paths.`, {timeout: 4000})
  },
  
  sortSelected () {
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
  },
  
  createRectangles (msg: any) {
    const nodes = []
  
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle()
      rect.x = i * 150
      rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}]
      figma.currentPage.appendChild(rect)
      nodes.push(rect)
    }
  
    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)
  },

  cancel () {
    figma.closePlugin()
  },

  arrange () {
    const selectedNodes: any = figma.currentPage.selection
    const nodes = [...selectedNodes]
    const chunkSize = 36
    const gutter = 40
    const chunks = Array(Math.ceil(nodes.length / chunkSize))
      .fill(null)
      .map((_, i) => i * chunkSize)
      .map(start => nodes.slice(start, start + chunkSize))
    const [ox, oy] = [nodes[0].x, nodes[0].y]
    chunks.forEach((row, y) => {
      row.forEach((node, x) => {
        const nx = (x * ((node.width) + gutter)) + ox
        const ny = (y * ((node.height) + gutter)) + oy
        node.x = nx
        node.y = ny
      })
    })
    // figma.viewport.scrollAndZoomIntoView(selectedNodes)
  }
}
