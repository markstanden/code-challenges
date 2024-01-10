/**
 * Returns the sum of the passed number[] array.
 * @param {number[]} array
 * @return {number}
 */
function simpleArraySum(array) {
    /**
     * Reducer that sums the contents of an array.
     * undefined and null values are considered to be zero
     * @param {number} acc
     * @param {number} val
     * @return {number}
     */
    const safeSum = (acc, val) => acc + (val ?? 0);

    return array?.reduce(safeSum, 0);
}

module.exports = {simpleArraySum}