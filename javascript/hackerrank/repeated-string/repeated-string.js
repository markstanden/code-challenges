/**
 * Returns the number of letter 'a's in the first *numberOfChars* in
 * an infinitely repeated *repeatedString*
 * @param {string} repeatedString - string to be infinitely repeated
 * @param {number} numberOfChars - the number of chars at which point to stop counting 'a's
 */
function repeatedString(repeatedString, numberOfChars) {
    const length = repeatedString.length;
    const getACount = getNumberOfAFrom(repeatedString);

    const repeats = Math.trunc(numberOfChars / length);
    const extras = numberOfChars % length;

    return (repeats * getACount(length)) + getACount(extras);

    /**
     * Curried function that returns a function to count
     * the number of 'a's in the provided string
     * @param {string} str - The string to count the 'a's in
     * @return {function(number): number}
     */
    function getNumberOfAFrom(str) {
        /**
         * Function that returns the number of 'a' chars in a substring of length *max*
         * @param {number} max - The max length of the substring to consider
         * @return {number} The number of 'a' chars in the substring
         */
        return function getNumberOfATo(max) {
            return str.split('')
                .slice(0, max)
                .filter((letter) => letter === 'a')
                .length;
        };
    }
}

module.exports = {repeatedString};