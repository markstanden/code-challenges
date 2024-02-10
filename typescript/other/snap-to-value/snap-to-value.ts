/**
 * Returns an ordered list of snap values
 * based on the number of increments required.
 * e.g. an increment of 4 would produce:
 * [0, 0.25, 0.5, 0.75, 1]
 * @param {number} increments
 */
function getSnapValues(increments: number): number[] {
    return Array(increments + 1)
        .fill(0)
        .map((_, val) => val / increments);
}

/**
 * Returns an array of boundary values based on the supplied ordered snap values.
 * each boundary value is the midpoint between consecutive snap values.
 * e.g. the snap values for quarter snapping:
 * [0, 0.25, 0.5, 0.75, 1]
 * would produce the following boundaries:
 * [0.125, 0.375, 0.625, 0.875]
 * @param {number[]} snapValues
 */
function getBoundaryValues(snapValues: number[]): number[] {
    return snapValues
        .map((value, index, array) => (value + array[index + 1]) / 2)
        .filter((num) => !isNaN(num));
}

/**
 * creates an equally seperated number of decimal increments
 * and rounds a number to the nearest increment
 * @param { number } increments the number of increments to divide the decimal part of a number into.
 * @return { (value: number) => number }
 */
export function snapToIncrement(increments: number): (value: number) => number {
    if (!increments || increments < 1) {
        throw Error(
            'Invalid Argument: increments must be a positive integer > 1'
        );
    }
    const snapValues = getSnapValues(increments);
    const boundaryValues = getBoundaryValues(snapValues);

    return function (value: number): number {
        const [wholeNumber, decimal] = splitNumber(value);
        const crossedBoundaries = (boundary: number) => boundary <= decimal;
        const snapIndex = boundaryValues.filter(crossedBoundaries).length;

        return wholeNumber + snapValues[snapIndex];
    };
}

/**
 * Splits a number into its whole number and decimal component parts.
 * @param {number} float
 * @return {[wholeNumber: number, decimal: number]} a tuple of [whole number, decimal]
 */
function splitNumber(float: number): [wholeNumber: number, decimal: number] {
    const wholeNumber = Math.floor(float);
    const decimal = float - wholeNumber;

    return [wholeNumber, decimal];
}
