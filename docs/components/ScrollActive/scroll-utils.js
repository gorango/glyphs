// Must be called with 'call' to prevent bugs on some devices
export const find = (list, callback) => [].find.call(list, callback)

// Must be called with 'call' to prevent bugs on some devices
export const forEach = (list, callback) => [].forEach.call(list, callback)

// Decoded in case there are special characters
export const getIdFromHash = hash => decodeURI(hash.substr(1))

export const getSectionIdFromElement = (element) => {
  if (element.dataset.sectionSelector && element.dataset.sectionSelector.substr(0, 1) === '#') {
    return element.dataset.sectionSelector
  }
  return element.hash
}

export const getSectionSelector = (element) => {
  if (element.dataset.sectionSelector) {
    return element.dataset.sectionSelector
  }
  if (element.hash) {
    return `#${getIdFromHash(element.hash)}`
  }
  return ''
}

/**
 * Pushes the given hash to the URL using primarily pushState if available to prevent the
 * scroll from jumping to the hash element. Uses window.location.hash as a fallback.
 *
 * @param {String} hash The hash value to be pushed
 */
export const pushHashToUrl = (hash) => {
  if (window.history.pushState) {
    window.history.pushState(null, null, hash)

    return
  }

  window.location.hash = hash
}
