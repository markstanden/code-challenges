/*
 * A further attempt to beat the extreme (e.g. arrayLength = 10,000,000, queries.length = 100000)
 * tests on the site.
 *
 * Reading the comments in the challenge a member has suggested the following approach,
 * which I think will reduce complexity:
 *
 * 1. Create a Map - key will be index within the final array
 * 2. Add queries to the map, positive entries for start values and negative for the end values
 * 3. Map to array
 * 4. Run through sequentially adding all values, and recording the highest
 * 5. Return highest
 *
 * I opted to 'brute force' the keys in steps 3 & 4 which
 * means that I don't need to create the array in 3.
 * Some have suggested this is why the JS version was failing,
 * with maximum array lengths being exceeded, mdn lists max size of an array
 * at > 3,200,000,000 entries, so it shouldn't be.
 * Either way, it also means I don't need to run an expensive sort algorithm on the keys.
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
    return fp.pipe(
        convertToQueryPairs,
        squashToIndexedMap,
        getHighestValueToIndex(lineWidth),
    )(queries);

    /**
     * @typedef {number} index - final array index
     * @typedef {number} valueManipulation - alteration to the value.
     * @typedef {[index, valueManipulation]} QueryTuple
     */
    /**
     * Returns a new array after converting the provided query array into
     * an array of single alteration steps.
     * @param {Query[]} queries - The provided array of queries
     * @return {QueryTuple}
     */
    function convertToQueryPairs(queries) {
        return queries.flatMap(
            ([startIndex, endIndex, value]) =>
                [[startIndex, value], [endIndex + 1, value * -1]],
        );
    }

    /**
     * Returns a Map of queries.
     * Multiple queries with the same index are added together.
     * @param {QueryTuple[]} queries
     * @return {Map<number, number>}
     */
    function squashToIndexedMap(queries) {
        return queries.reduce((qmap, [index, value]) => qmap.has(index)
                ? qmap.set(index, qmap.get(index) + value)
                : qmap.set(index, value),
            new Map());
    }


    /**
     * Returns a function that attempts all numeric keys
     * in an array, limited to the provided *max* value
     * @param {number} max - The final key to attempt to access in the map
     * @return {function(Map<number, number>): number}
     */
    function getHighestValueToIndex(max) {
        return getHighest;

        /**
         * Returns the highest value by
         * attempting all numeric keys in a map
         * @param {Map<number,number>}map
         * @return {number} The highest value in the range
         */
        function getHighest(map) {
            let highest = 0;
            let prev = 0;
            let index = 0;

            while (index++ <= max) {
                prev += map.get(index) ?? 0;
                highest = Math.max(highest, prev);
            }

            return highest;
        }
    }
}

/**
 * IIFE to encapsulate fp toolkit
 * @see https://github.com/markstanden/fp
 */
const fp = (function fpToolkitIIFE() {
    const composePair = (f, g) => (args) => f(g(args));
    const compose = (...fns) => fns.reduce(composePair);
    const pipe = (...fns) => fns.reduceRight(composePair);

    return {compose, pipe}
}())


module.exports = {arrayManipulation};
