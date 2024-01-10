/*
 * This solution is still O(n^2) and still fails to beat the extreme tests on the site.
 * Apparently this solution works in other languages, and it times out in JS
 */

/**
 * @typedef {number} leftIndex - left index (inclusive)
 * @typedef {number} rightIndex - right index (inclusive)
 * @typedef {number} valueToAdd - Value to add
 * @typedef {[leftIndex, rightIndex, valueToAdd]} Query
 */

/**
 * Function that returns the max value in an array *n* wide
 * following the completion of the provided *queries*
 * @see https://www.hackerrank.com/challenges/crush/problem
 *
 * queries is and array of query:
 * [start index, end index, value to add]
 *
 * @param {number} lineWidth the number of elements in the array
 * @param {Query[]} queries - The queries to perform on the array.
 **/
function arrayManipulation(lineWidth, queries) {

    const q = queries.map(convertQuery)
    const result = [];
    for (let i = 0; i < lineWidth; i++){
        let sum = 0;
        for (let row = 0; row < q.length; row++) {
            sum += q[row][i] ?? 0
        }
        result.push(sum);
    }
    return result.reduce(max)


    /**
     * Converts a query into an array of values
     * *startIndex* and *endIndex* are 1-index array inclusive values.
     * @param {number} startIndex
     * @param {number} endIndex
     * @param {number} value
     * @return {any[]}
     */
    function convertQuery([startIndex, endIndex, value]) {
        return Array(lineWidth).fill(value, startIndex - 1, endIndex)
    }


    /**
     * Reducer that returns the highest value in a numeric array
     * @param {number} prev
     * @param {number} curr
     * @return {number}
     */
    function max(prev, curr){
        return Math.max(prev, curr);
    }
}

module.exports = {arrayManipulation}
