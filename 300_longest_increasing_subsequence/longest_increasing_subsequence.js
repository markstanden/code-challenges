/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    //[10,9,2,5,3,7,101,18]

    //first scan - find nearest neighbour
    // 10 -> 101
    // 9 -> 101
    // 2 -> 5
    // 5 -> 7
    // 3 -> 7
    // 7 -> 101
    // 101 -> undefined
    // 18 -> undefined

    const asPairs =  nums.map((value, index, array) => {
        const next = array.slice(index)
            .find(next => next > value)
        return [value, next]
    })

    asMap = new Map(asPairs)

    function getLength(key, length = 1) {
        return asMap.get(key) ? getLength(asMap.get(key), length + 1) : length;
    }

    const max = (prev, curr) => curr > prev ? curr : prev;

    return [...asMap.keys()]
        .map(key => getLength(key))
        .reduce(max);
};


module.exports = {lengthOfLIS};