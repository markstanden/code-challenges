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

export class ProgramWindow {
    static DEFAULT_WIDTH = 800
    static DEFAULT_HEIGHT = 600
    static MIN_WINDOW_DIMENSION = 1

    constructor() {
        this._size = new Size()
        this._screenSize = new Size(ProgramWindow.DEFAULT_WIDTH, ProgramWindow.DEFAULT_HEIGHT)
        this._position = new Position()
    }

    /**
     * The size of the viewport
     * @type {Size}
     * @private
     */
    _screenSize = new Size(800, 600)

    /**
     * returns the size of the viewport
     * @returns {Size}
     */
    get screenSize() {
        return this._screenSize
    }

    get position() {
        return this._position
    }

    get size() {
        return this._size
    }

    /**
     * returns the value unless either of the bounds are reached.
     * If a bound is exceeded, the bound breached is returned.
     * @param lowest
     * @param value
     * @param highest
     * @returns {number}
     * @private
     */
    _bounded(lowest, value, highest) {
        return Math.min(Math.max(lowest, value), highest)
    }

    resize(size) {
        // If the width or height is smaller than the minimum window dimension, the minimum is returned.
        const maxWidth = this._screenSize.width - this._position.x
        const maxHeight = this._screenSize.height - this.position.y

        const newWidth = this._bounded(ProgramWindow.MIN_WINDOW_DIMENSION, size.width, maxWidth)
        const newHeight = this._bounded(ProgramWindow.MIN_WINDOW_DIMENSION, size.height, maxHeight)

        this._size = new Size(newWidth, newHeight)
    }

    move(position) {

        const maxX = this._screenSize.width - this._size.width
        const maxY = this._screenSize.height - this._size.height

        const newX = this._bounded(0, position.x, maxX)
        const newY = this._bounded(0, position.y, maxY)
        
        this._position = new Position(newX, newY)
    }
}