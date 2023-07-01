/// <reference path="./global.d.ts" />
//
// @ts-check

const PRICE_LIST = {
    "Margherita": 7, "Caprese": 9, "Formaggio": 10, "ExtraSauce": 1, "ExtraToppings": 2,
}

/**
 * Determine the prize of the pizza given the pizza and optional extras
 * Uses recursion to calculate pizza prices
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra|Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPriceRecursive(pizza, ...extras) {

    /**
     * Recursive function to calculate the cost of the orders.
     * @param {number} total
     * @param {(Pizza|Extra|Extra[])[]} remainingOrder
     * @returns {number}
     */
    const getPrice = (total, remainingOrder) => {
        if (remainingOrder.length === 0) {
            return total
        }
        const newTotal = total + PRICE_LIST[remainingOrder.shift()]
        return getPrice(newTotal, remainingOrder)
    }

    /**
     * An array of pizzas and extras, to be priced up from the price list
     * @type {(Pizza|Extra|Extra[])[]}
     */
    const fullOrder = [pizza, ...extras]
    return getPrice(0, fullOrder)
}

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra|Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
    const sumExtras = extras?.reduce((acc, extra) => acc + PRICE_LIST[extra], 0)
    return PRICE_LIST[pizza] + sumExtras
}

/**
 * Calculate the prize of the total order, given individual orders
 * Uses recursion to iterate the order list
 * fails with a "Maximum call stack size exceeded" error after 1.5seconds on
 * the gigantic order.
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPriceRecursive(pizzaOrders) {

    /**
     * Recursive function to calculate the cost of the orders.
     * @param {number} total
     * @param {PizzaOrder[]} remainingOrders
     * @returns {number}
     */
    const getPrice = (total, remainingOrders) => {
        if (remainingOrders.length === 0) {
            return total
        }
        const currentOrder = remainingOrders.shift()
        const newTotal = total + pizzaPrice(currentOrder.pizza, ...currentOrder.extras)
        return getPrice(newTotal, remainingOrders)
    }

    // Setup and run the recursive function
    const fullOrder = [...pizzaOrders]
    return getPrice(0, fullOrder)
}

/**
 * Calculate the prize of the total order, given individual orders
 * Uses functional array methods to iterate the order list.
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
    return pizzaOrders
        .map(order => pizzaPrice(order.pizza, ...order.extras))
        .reduce((sum, price) => sum + price, 0)
}
