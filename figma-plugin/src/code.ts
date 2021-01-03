import search from './utils/figma/search/index'
import target from './utils/figma/target'
import actions from './utils/figma/actions'
import arrange from './utils/figma/arrange'

figma.showUI(__html__, {
  width: 288,
  height: 800
})

const updateSelection = () => figma.ui.postMessage({ type: 'selection', value: figma.currentPage.selection.length })

updateSelection()

figma.on('selectionchange', () => updateSelection())

figma.ui.onmessage = ({ type, value}) => fns[type](value)

const fns = {
  ...search,
  ...target,
  ...actions,
  ...arrange,
  cancel () { figma.closePlugin() }
}
