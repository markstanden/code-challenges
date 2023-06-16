// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  switch (kind){
    case "car":
    case "truck":
      return true
    default:
      return false
  }
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let bestOption
  if (option1.charAt(0).toUpperCase() < option2.charAt(0).toUpperCase()) {
    bestOption = option1
  } else {
    bestOption = option2
  }
  return `${bestOption} is clearly the better choice.`
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  let remainingValue = 0.7 // between 3 and 10 years old
  if (age < 3) {
    remainingValue = 0.8
  }
  else if (age > 10) {
    remainingValue = 0.5
  }
  return originalPrice * remainingValue

}
