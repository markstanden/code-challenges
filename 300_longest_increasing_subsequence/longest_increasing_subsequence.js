/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
    [10,9,2,5,3,7,101,18]

    //first scan - find nearest neighbour
    // 10 -> 101
    // 9 -> 101
    // 2 -> 5
    // 5 -> 7
    // 3 -> 7
    // 7 -> 101
    // 101 -> undefined

    // count jumps
};


module.exports = {lengthOfLIS};