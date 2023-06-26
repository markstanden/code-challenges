/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
const NOT_READY_MESSAGE = "Not done, please wait."
const DONE_MESSAGE = "Lasagna is done."
const UNSET_MESSAGE = "You forgot to set the timer."

/**
 * Returns a message indicating whether the lasagna is cooked
 * @param num
 * @returns {string}
 */
export const cookingStatus = (num) => {
    if (num === undefined) {
        return UNSET_MESSAGE
    }

    return (num <= 0) ? DONE_MESSAGE : NOT_READY_MESSAGE
}

/**
 * returns the estimated cook time for the lasagna based on the provided layers,
 * and the average preparation time required per layer.
 * @param layers {string[]}
 * @param averageLayerPrepTime {number}
 * @returns {number}
 */
export const preparationTime = (layers = [], averageLayerPrepTime = 2) => {
    return layers.length * averageLayerPrepTime
}

/**
 * returns the amount noodles and sauce required to create the lasagne.
 * @param layers {String[]}
 * @returns {{noodles: number, sauce: number}}
 */
export const quantities = (layers = []) => {
    const getAmountRequired = (layers, item, amountPerLayer) => {
        const itemLayers = layers.filter((layer) => layer === item).length
        return itemLayers * amountPerLayer
    }

    const noodles = 'noodles'
    const noodleMassPerLayer = 50

    const sauce = 'sauce'
    const sauceVolumePerLayer = 0.2

    return {
        noodles: getAmountRequired(layers, noodles, noodleMassPerLayer),
        sauce: getAmountRequired(layers, sauce, sauceVolumePerLayer)
    }
}

/**
 * Appends the last item from the first provided list to the second list.
 * the first list is not mutated.
 * @param friendsIngredients {String[]}
 * @param layers {String[]}
 */
export const addSecretIngredient = (friendsIngredients, layers) => {
    layers.push(friendsIngredients.at(-1))
}

/**
 * Returns an updated recipe for the required amount of portions.
 * @param recipe {{String:Number}}
 * @param portions {number}
 */
export const scaleRecipe = (recipe, portions) => {
    const obj = {}
    Object.entries(recipe)
        .forEach(([item, value]) => obj[item] = (value / 2) * portions)
    return obj

}