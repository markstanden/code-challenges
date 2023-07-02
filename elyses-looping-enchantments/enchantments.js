// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let count = 0
  for (const stackCard of stack){
    if (stackCard === card) {count++}
  }
  return count

  // Since this is an exercise to practice for loops the above is more
  // appropriate, but the use of a predicate with filter will provide a
  // neater solution.
  // return stack.filter(stackCard => stackCard === card).length
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // type ? 0 : 1 is not particularly descriptive,
  // particularly when even being true is arbitrary.
  const EVEN = true
  const remainder = type === EVEN ? 0 : 1

  let count = 0
  for (const stackCard of stack) {
    if(stackCard % 2 === remainder) {
      count++
    }
  }
  return count

  // Again, filter makes more sense to me here.
  // return stack.filter(stackCard => stackCard % 2 === remainder).length
}