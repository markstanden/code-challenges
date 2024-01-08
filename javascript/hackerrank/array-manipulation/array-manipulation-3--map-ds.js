/*
 * A further attempt to beat the extreme (e.g. arrayLength = 10,000,000, queries.length = 100000)
 * tests on the site.
 *
 * Reading the comments in the challenge a member has suggested the following approach,
 * which I think will reduce complexity:
 *
 * - Create a Map - key will be index within the final array
 * - Add queries to the map, positive entries for start values and negative for the end values
 * - Map to array
 * - Run through sequentially adding all values, and recording the highest
 * - Return highest
 */

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
 * @param {number} lineWidth the number of elements in the array
 * @param {query[]} queries - The queries to perform on the array.
 **/
function arrayManipulation(lineWidth, queries) {

}

module.exports = {arrayManipulation}
