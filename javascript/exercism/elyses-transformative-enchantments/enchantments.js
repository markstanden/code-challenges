// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
    return deck.map(card => card * 2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
    /**
     * Returns a function that returns replaces the passed value with an array of three of the values.
     * if the value is not matched, return the original card.
     * @param {number} value
     * @returns {function(number): number[]|number}
     */
    const triplicate = (value) => (card) => card === value ? [value, value, value] : card
    return deck.flatMap(triplicate(3))
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
    // middle will be the left hand value of the middle pair
    const middle = Math.floor(deck.length / 2)

    // slice is not inclusive of the last index, so need to go +1 higher
    return deck.slice(middle - 1, middle + 1)
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
    // Shallow copy the deck
    const newDeck = [...deck]

    // Remove and store first and last cards
    const first = newDeck.shift()
    const last = newDeck.pop()

    // Calculate LH middle value
    const middle = Math.floor(newDeck.length / 2)

    // insert reversed outer cards into middle
    newDeck.splice(middle, 0, last, first)

    // return copied deck
    return newDeck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
    return deck.filter(card => card === 2)
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
    return deck.sort((a, b) => a - b)
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
    return deck.reverse()
}
