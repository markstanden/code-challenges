/**
 * Counts the number of valleys in a given string of Ups and Downs
 * A mountain is a sequence of consecutive steps above sea level,
 * starting with a step up from sea level and ending with a step down to sea level.
 * A valley is a sequence of consecutive steps below sea level,
 * starting with a step down from sea level and ending with a step up to sea level.
 * @param {number} steps the number of steps on the hike
 * @param {string} path a string describing the path
 * @return {number}
 */
function countingValleys(steps, path) {
    return path
        .split('')
        .reduce(
            ([height, downCount], step) => {
                const atSeaLevel = height === 0;
                const goingDown = step === 'D';
                const newHeight = height + (goingDown ? -1 : +1);

                return [newHeight, downCount + (atSeaLevel && goingDown ? 1 : 0)];
            }, [0, 0])
        .at(1);
}

module.exports = {countingValleys};