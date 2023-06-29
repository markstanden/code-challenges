// @ts-check

/**
 *
 * @param {number} width
 * @param {number} height
 * @constructor
 */
export function Size(width = 80, height = 60) {
    this.width = width
    this.height = height
}

Size.prototype.resize = function (newWidth, newHeight) {
    this.height = newHeight
    this.width = newWidth
}

export function Position(x = 0, y = 0) {
    this.x = x
    this.y = y
}

Position.prototype.move = function (newX, newY) {
    this.x = newX
    this.y = newY
}
