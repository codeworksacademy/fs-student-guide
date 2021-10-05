let debounced = []
/**
 * A simple debounce function timeout in (ms)
 * @param {function} callback
 * @param {number} timeout
 */
function $debounce(callback, timeout, cancel) {
  const i = debounced.find(c => c.callback === callback)
  let index = debounced.length
  if (i) {
    clearTimeout(i.id)
    index = i.index
    if (cancel) {
      debounced.splice(index, 1)
      return
    }
  }
  const id = setTimeout(() => {
    callback()
    const removeI = debounced.findIndex(c => c.callback === callback)
    if (removeI !== -1) {
      debounced.splice(removeI, 1)
    }
  }, timeout)
  debounced[index] = { id, index, callback }
}
function $purgeDebounce() {
  debounced = []
};

window.$debounce = $debounce
window.$purgeDebounce = $purgeDebounce