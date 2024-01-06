/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    return [
        ...nums
            .map(pairWithValidNextSteps)
            .reverse()
            .reduce(toMapOfMaxLengths, new Map())
            .values()
    ].reduce(max);

    /**
     * @typedef {number} key - key
     * @typedef {number[]} value - Array of valid next steps
     * @typedef {[key, value]} NextStepsPair
     */

    /**
     * returns an array of the original value paired with
     * all valid next steps as an array of pairs
     * @param {number} current
     * @param {number} index
     * @param {number[]} array
     * @return {NextStepsPair[]}
     */
    function pairWithValidNextSteps(current, index, array) {
        const nextSteps = array.slice(index)
            .filter(next => next > current)
        return [current, nextSteps]
    }

    /**
     * Returns the highest numeric value returned from
     * the provided map using only the provided keys
     * @param {Map<*, number>} map
     * @param {*} keys
     * @return {number}
     */
    function getHighestValue(map, keys){
        return keys.reduce((highest, key) => Math.max(map.get(key), highest), 0)
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

    /**
     * Reducer that returns a map where each value represents
     * the longest substring that can be obtained from the provided key
     * @param {Map<number, number>} map
     * @param {number} key
     * @param {number[]} values
     * @return {Map<number, number>}
     */
    function toMapOfMaxLengths(map, [key, values]) {
        return map.set(key, getHighestValue(map, values) + 1);
    }
}

module.exports = {lengthOfLIS};