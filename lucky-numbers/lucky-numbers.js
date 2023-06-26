// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {

    /**
     * Converts an integer array into Number
     * @param intArray
     * @returns {number}
     */
    const toNumber = (intArray) => Number(intArray.join(""))

    return toNumber(array1) + toNumber(array2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    const valueAsArray = String(value).split("")

    while (valueAsArray.length > 1) {
        let first = valueAsArray.shift()
        let last = valueAsArray.pop()
        if (first !== last) {
            return false
        }
    }
    return true
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
    const NO_ERROR = ""
    const NO_INPUT = "Required field"
    const ERROR_NAN = "Must be a number besides 0"

    let result = NO_INPUT

    if (input) {
        const cleanedInput = input.trim()

        // Digits and decimal points only
        let regex = /\D\../

        result = NO_ERROR

        if (!regex.test(cleanedInput) || cleanedInput === "0") {
            result = ERROR_NAN
        }
    }

    return result
}
