/**
 * Checks the validity of a passed string as a valid ISBN.
 * @param {string} testString
 * @return {boolean}
 * @pure
 */
export function isValid(testString) {
    return Validation.of(testString)
        .map(toArray)
        .map(replaceXwith10)
        .map(removeNonIntegers)
        .map(checkLength(10))
        .map(singleDigitsOnlyInFirst(9))
        .map(checkISBNValidity)
        .isSuccess;
}

/**
 * Returns an array of characters from the
 * passed string wrapped in a Validation object.
 * @param string
 * @return {Validation<string[]>}
 * @pure
 */
function toArray(string) {
    return Validation.of(string.split(''));
}

/**
 * Replaces any occurrence of X with 10
 * @param {string[]}isbn
 * @return {Validation<string[]>}
 * @pure
 */
function replaceXwith10(isbn) {
    return Validation.of(
        isbn.map(item => item.toUpperCase() === 'X' ? '10' : item),
    );
}

/**
 * Converts the passed string array into an array of integers.
 * Any non integers are removed
 * @param {string[]} isbnStringArray
 * @return {Validation<number[]>}
 * @pure
 */
function removeNonIntegers(isbnStringArray) {
    return Validation.of(
        isbnStringArray
            .map(Number)
            .filter(Number.isInteger),
    );
}


/**
 * Checks the algorithmic validity of the ISBN
 * @param {number[]} isbnArray
 * @return {Validation}
 * @pure
 */
function checkISBNValidity(isbnArray){
    const multiplyByReverseIndex = (value, index) => value * (10 - index);
    const sum = (acc, current) => acc + current;
    const isDivisibleBy = number => value => value % number === 0;

    const result = isbnArray
        .map(multiplyByReverseIndex)
        .reduce(sum);

    return isDivisibleBy(11)(result)
        ? Success.of(isbnArray)
        : Failure.of('Failed Algorithmic Check of ISBN Number');
}

/**
 * Returns a function that checks that the first (number)
 * digits contain only single digit values.
 * @param {number} number
 * @return {function(number[]): Validation<number[]>}
 * @pure
 */
function singleDigitsOnlyInFirst(number){

    /**
     * Returns a Success object only if the first {number}
     * digits are single digit integers
     * @param {number[]} isbnArray
     * @return {Validation<number[]>}
     */
    function checkFirstDigits(isbnArray) {
        return isbnArray
            .slice(0, number)
            .every(value => value <= 9)
            ? Success.of(isbnArray)
            : Failure.of('Check digit is in Invalid location');
    }

    return checkFirstDigits;
}

/**
 * Returns a function that checks the length
 * of an ISBN array against the passed validLength.
 * @param {number} validLength - The valid length of the ISBN.
 * @return {function(number[]):Validation<number[]>}
 * @pure
 */
function checkLength(validLength) {
    /**
     * Returns a Validation object indicating
     * whether the array is the valid length
     * @param {number[]} isbnArray
     * @return {Validation}
     */
    function hasValidLength(isbnArray) {
        return isbnArray.length === validLength
            ? Success.of(isbnArray)
            : Failure.of('Invalid Value');
    }

    return hasValidLength;
}

/**
 * Validation object used to produce a functional validation flow.
 * Inspired by the excellent Joy of Javascript
 * @link https://www.manning.com/books/the-joy-of-javascript
 * @pure
 */
const Validation = {
    isSuccess: false,
    of: function of(value) {
        return Success.of(value);
    },
};

/**
 * Success object that is returned when a
 * validation object remains on the happy path
 * @pure
 */
const Success = Object.create(Validation);
Success.of = function of(value) {
    this.isSuccess = true;
    this.map = (fn) => fn(value);
    return this;
};


/**
 * Failure object that is returned when a
 * validation object fails a validation test
 * @pure
 */
const Failure = Object.create(Validation);
Failure.of = function of(errorMsg) {
    this.map = (fn) => Failure.of(errorMsg);
    return this;
};