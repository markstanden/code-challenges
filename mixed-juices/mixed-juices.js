// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const drinks = new Map([
    ['Pure Strawberry Joy', 0.5],
    ['Energizer', 1.5],
    ['Green Garden', 1.5],
    ['Tropical Island', 3],
    ['All or Nothing', 5],
])
const EVERYTHING_ELSE = 2.5

const wedges = new Map([
    ['small', 6],
    ['medium', 8],
    ['large', 10],
])

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    if (drinks.has(name)) {
        return drinks.get(name)
    } else return EVERYTHING_ELSE
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesRequired
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesRequired, limes) {
    let usedLimes = 0
    while (wedgesRequired > 0) {
        // We still need wedges
        if (limes.length === 0) {
            // There are no limes left, so we can't cut any.
            return usedLimes
        } else {
            // Cut and use the top lime
            let slicesFromTopLime = wedges.get(limes.shift())
            // remove from the required amount
            wedgesRequired -= slicesFromTopLime
            usedLimes++
        }
    }
    return usedLimes
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    do {
        // Remove the next drink from the list
        let currentOrder = orders.shift()

        // Subtract the time taken to complete from the remaining time.
        // timeLeft is provided in minutes.
        timeLeft -= timeToMixJuice(currentOrder)

    } while (timeLeft > 0)
    return orders
}
