/**
 * Count the minimum number of steps required to reach the end of the array
 * from start to finish inclusive, with jumps of 1 or 2.
 * Jumps start and finish on an array item with a value of 0
 * jumps cannot end on an array item with a value of 1
 * @param {number[]} clouds binary number array, where 0 represents safe clouds
 * @return {number} the minimum number of steps
 */
function jumpingOnTheClouds(clouds) {
    return clouds
        .join("")
        .split('1')
        .map(item => item.length)
        .map(roundEvensUp)
        .reduce(sum);

    function roundEvensUp(num) {
        return num % 2 === 0 ? num + 1 : num;
    }

    function sum(acc, current){
        return acc + current;
    }

}

module.exports = {jumpingOnTheClouds};