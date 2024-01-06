/**
 * Recursively un-nests an infinitely nested array
 * @param {any[]} array
 * @return {any[]}
 */
export function flatten(array) {
    return array
      .flatMap(items => isArray(items) ? flatten(items) : items)
      .filter(items => items != null)
}

/**
 * Returns true if passed an array.
 * @param {*} array
 * @returns {Boolean}
 */
function isArray(array) {
  return array instanceof Array;
}