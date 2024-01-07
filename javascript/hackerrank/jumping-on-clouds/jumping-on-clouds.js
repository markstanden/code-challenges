/**
 * Count the minimum number of steps required to reach the end of the array
 * from start to finish inclusive, with jumps of 1 or 2.
 * Jumps start and finish on an array item with a value of 0
 * jumps cannot end on an array item with a value of 1
 * @param {number[]} clouds binary number array, where 0 represents safe clouds
 * @return {number} the minimum number of steps
 */
function jumpingOnClouds(clouds) {
    /*
    The number of hops for Even lengths of 0s
    round up to the number of hops of the next odd number.
    0 = 1
    00 = 2
    000 = 2
    0000 = 3
    00000 = 3
    */

    return clouds
        .join("")
        .split('1')
        .map(item => item.length)
        .map(halfThenAddOne)
        .reduce(sum, -1); // Init accumulator at -1 as last hop is not counted

    /**
     * Returns the number of required jumps for a given truthy length of 0s
     * Filters falsy num values, returning 0
     * @param num the length of the sequence of 'landable' clouds
     * @return {number} the minimum number of hops required
     */
    function halfThenAddOne(num) {
        return Math.trunc(num / 2) + 1;
    }

    /**
     * Reducer that returns the sum of an array of values
     * @param {number} acc - Accumulator
     * @param {number} current - Current value
     * @return {number} - the sum of the passed arguments
     */
    function sum(acc, current){
        return acc + current;
    }
}

module.exports = {jumpingOnClouds};