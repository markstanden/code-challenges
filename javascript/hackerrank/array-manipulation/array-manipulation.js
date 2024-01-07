/**
 * @typedef {number} leftIndex - left index (inclusive)
 * @typedef {number} rightIndex - right index (inclusive)
 * @typedef {number} valueToAdd - Value to add
 * @typedef {[leftIndex, rightIndex, value]} query
 */

/**
 * Function that returns the max value in an array *n* wide
 * following the completion of the provided *queries*
 * @see https://www.hackerrank.com/challenges/crush/problem
 *
 * queries is and array of query:
 * [start index, end index, value to add]
 *
 * @param {number} n the number of elements in the array
 * @param {query[]} queries - The queries to perform on the array.
 **/
function arrayManipulation(n, queries) {
    return [n, queries];
}

module.exports = {arrayManipulation}
