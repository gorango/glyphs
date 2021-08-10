module.exports = {
  findOne,
  findAll
}

function findOne (node, fn, depth=0) {
  if (depth > 2) return undefined
  if (fn(node)) {
    return node
  }
  if ('children' in node) {
    return node.children.reduce((found, child) => found || findOne(child, fn, depth + 1), false)
  }
  return undefined
}

function findAll (node, fn, depth=0, parent=null) {
  if (depth > 2) return []
  let arr = []
  if ('children' in node) {
    arr = node.children.reduce((arr, child) => [...arr, ...findAll(child, fn, depth + 1, node)], [])
  }
  if (fn(node, parent)) {
    arr = [...arr, { ...node, parent: { type: parent.type, name: parent.name } }]
  }
  return arr
}
