/**
 * Calculates whether all the frequencies of occurrences of values
 * in an array are unique.
 * Result: Beats 65.93% of users with JavaScript
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
    // Reduce to a map of values:occurrences
    const asMap = arr.reduce(
        (acc, value) => acc.set(value, acc.has(value)
            ? acc.get(value) + 1
            : 1
    ) , new Map())

    // if there are duplicates the sizes will differ
    return new Set(asMap.values()).size === asMap.size;
}

module.exports = {uniqueOccurrences}