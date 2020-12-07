
export function post (type, value) {
  parent.postMessage({ pluginMessage: { type, value } }, '*')
}
