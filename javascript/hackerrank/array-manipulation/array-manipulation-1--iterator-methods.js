/*
 * This solution is O(n^2) due to the nested iterator functions in the
 * array rotator function.  It passes all tests locally, and reads ok,
 * but fails to beat the extreme (arrayLength = 10,000,000, queries.length = 100000)
 * tests on the site.
 *
 * I will remove the iterator methods for a for loop and test again to see if there are
 * speed implications using the iterator methods I can avoid.
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
function arrayManipulation1IteratorMethods(lineWidth, queries) {
    const arrayRotator = rotate90(0, lineWidth);

    return arrayRotator(queries.map(convertQuery))
        .map(col => col.reduce(sumSafely))
        .reduce(max)

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
     * Return a function to rotate an array of a set width,
     * with defaults provided for undefined cells
     * @param defaultValue
     * @param {number?} width - The width of the array to rotate if known.
     * @return {function(number[][]):number[][]}
     */
    function rotate90(defaultValue, width){
        /**
         * Returns a rotated array to allow iteration of columns
         * @param {number[][]} multiArray - the array to rotate
         * @return {number[][]} a rotated array
         */
        return function(multiArray) {
            return [...Array(width ?? multiArray[0].length)]
                .map(
                    (_value, index) =>
                        multiArray.map(
                            line => line[index] ?? defaultValue
                        )
                )
        }
    }


    /**
     * Reducer to return the sum of a number array,
     * with undefined and null values treated as 0
     * @param {number} acc
     * @param {number|undefined|null[]} value
     * @return {number}
     */
    function sumSafely(acc, value){
        return acc + value ?? 0;
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

module.exports = {arrayManipulation: arrayManipulation1IteratorMethods}
