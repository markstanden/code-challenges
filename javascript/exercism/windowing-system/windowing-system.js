// @ts-check

/**
 * Prototype Style class declaration for Size class.
 * Note the poor encapsulation, without getters and setters.
 * @param {number} width
 * @param {number} height
 * @constructor
 */
export function Size(width = 80, height = 60) {
    this.width = width
    this.height = height
}

/**
 * Prototype style, mutates object instance variables.
 * @param {Number} newWidth
 * @param {Number} newHeight
 */
Size.prototype.resize = function (newWidth, newHeight) {
    this.height = newHeight
    this.width = newWidth
}

/**
 * Prototype style class again with poor encapsulation.
 * @param {Number} x
 * @param {Number} y
 * @constructor
 */
export function Position(x = 0, y = 0) {
    this.x = x
    this.y = y
}

/**
 * Prototype style, mutates object instance variables.
 * @param {Number} newX
 * @param {Number} newY
 */
Position.prototype.move = function (newX, newY) {
    this.x = newX
    this.y = newY
}

export class ProgramWindow {
    /**
     * The default width of newly created windows
     * @type {number}
     * @const
     */
    static DEFAULT_WIDTH = 800

    /**
     * The default height of newly created windows
     * @type {number}
     * @const
     */
    static DEFAULT_HEIGHT = 600

    /**
     * The minimum allowable size of windows
     * @type {number}
     * @const
     */
    static MIN_WINDOW_DIMENSION = 1

    constructor() {
        this._size = new Size()
        this._screenSize = new Size(ProgramWindow.DEFAULT_WIDTH, ProgramWindow.DEFAULT_HEIGHT)
        this._position = new Position()
    }

    /**
     * returns the size of the viewport
     * @returns {Size}
     */
    get screenSize() {
        return this._screenSize
    }

    /**
     * returns the current position of the window
     * @returns {Position}
     */
    get position() {
        return this._position
    }

    /**
     * Sets (mutates) the current position of the window
     * @param {Position} newPosition
     */
    set position(newPosition) {
        this._position = newPosition
    }

    /**
     * Returns the current size of the window.
     * @returns {Size}
     */
    get size() {
        return this._size
    }

    /**
     * Sets (Mutates) the current size of the window.
     * @param newSize
     */
    set size(newSize) {
        this._size = newSize
    }

    /**
     * returns the value unless either of the limits are reached (exceeded).
     * If a limit is exceeded, the limit is returned.
     * @param {Number} value
     * @param {Number} lowerLimit
     * @param {Number} upperLimit
     * @returns {number}
     * @private
     */
    constrain(value, lowerLimit, upperLimit) {
        return Math.min(Math.max(lowerLimit, value), upperLimit)
    }

    /**
     * Resizes the window.
     * Mutates the size instance variable of the ProgramWindow
     * @param {Size} size
     */
    resize(size) {
        // If the width or height is smaller than the minimum window dimension, the minimum is returned.
        const maxWidth = this.screenSize.width - this.position.x
        const maxHeight = this.screenSize.height - this.position.y

        const newWidth = this.constrain(size.width, ProgramWindow.MIN_WINDOW_DIMENSION, maxWidth)
        const newHeight = this.constrain(size.height, ProgramWindow.MIN_WINDOW_DIMENSION, maxHeight)

        this._size = new Size(newWidth, newHeight)
    }

    /**
     * Moves the window within the viewport.
     * The window is prevented from being moved outside of the bounds of the screenSize.
     * @param {Position} position
     */
    move(position) {

        const maxX = this.screenSize.width - this.size.width
        const maxY = this.screenSize.height - this.size.height

        const newX = this.constrain(position.x, 0, maxX)
        const newY = this.constrain(position.y, 0, maxY)

        this._position = new Position(newX, newY)
    }
}

/**
 * Resets a program window's size and location to provided defaults.
 * @param {ProgramWindow} window
 * @returns {ProgramWindow} The original ProgramWindow, with mutated state.
 */
export function changeWindow(window) {
    /**
     * Preset window dimensions.
     * Constants provided by the question setter.
     * @type {number}
     * @const
     */
    const NEW_WIDTH = 400, NEW_HEIGHT = 300

    /**
     * Preset window position coordinates.
     * Constants provided by the question setter.
     * @type {number}
     * @const
     */
    const NEW_X = 100, NEW_Y = 150

    // Create the new Size and Position objects,
    // and use the setters to mutate the window's instance variables.
    window.size = new Size(NEW_WIDTH, NEW_HEIGHT)
    window.position = new Position(NEW_X, NEW_Y)

    return window
}

