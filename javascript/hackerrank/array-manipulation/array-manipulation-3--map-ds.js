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
    return getHighestTo(lineWidth)(toMap(convertQueries(queries)));

    function convertQueries(queries) {
        return queries.flatMap(
            ([startIndex, endIndex, value]) => [[startIndex, value], [endIndex + 1, value * -1]],
        );
    }

    function toMap(queries) {
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
    function getHighestTo(max) {
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

module.exports = {arrayManipulation};
