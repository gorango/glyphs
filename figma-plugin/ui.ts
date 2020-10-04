import './ui.css'
// import 'figma-plugin-ds/dist/figma-plugin-ds.css'


const inputs = [
  ['selectChildren', 'selectionTarget', 'selectChildFrames'],
  ['selectAll', 'selectionTarget', 'selectAllFrames'],
  ['clone', 'cloneTarget', 'cloneToTarget'],
]

inputs.forEach(([id, input, fn]) => {
  document.getElementById(id).onclick = () => {
    const textbox = document.getElementById(input) as HTMLInputElement
    const value = textbox.value
    parent.postMessage({ pluginMessage: { type: fn, value } }, '*')
  }
})


const actions = [
  ['frame', 'frameSelected'],
  ['flatten', 'flattenChildren'],
  ['union', 'unionChildren'],
  ['center', 'centerChildren'],
  ['next', 'selectNext'],
  // ['copy', 'copySelected'],
  // ['paste', 'pasteCopy'],
  ['visibility', 'toggleVisibility'],
  ['hidden', 'selectHidden'],
  ['remove', 'removeSelected'],
  ['sort', 'sortSelected'],
  ['flattenAll', 'flattenAll'],
]

actions.forEach(([id, fn]) => {
  document.getElementById(id).onclick = () => {
    parent.postMessage({ pluginMessage: { type: fn } }, '*')
  }
})

window.addEventListener('keyup', event => {
  switch (event.key) {
    case 'Escape':
      parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
      break;
  }
})
