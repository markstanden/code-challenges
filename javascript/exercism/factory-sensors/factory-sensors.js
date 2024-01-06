// @ts-check
const MAX_ALLOWED_HUMIDITY = 70 // %
const MAX_NORMAL_TEMPERATURE = 500 // °C
const TEMPERATURE_ALERT_THRESHOLD = 600 // °C
export class ArgumentError extends Error {
}

export class OverheatingError extends Error {
    constructor(temperature) {
        super(`The temperature is ${temperature} ! Overheating !`);
        this.temperature = temperature;
    }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
    if (humidityPercentage > MAX_ALLOWED_HUMIDITY) {
        throw new Error("Humidity too high")
    }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
    if (temperature === null) {
        throw new ArgumentError()
    }
    if (temperature > MAX_NORMAL_TEMPERATURE) {
        throw new OverheatingError(temperature)
    }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
    try {
        actions.check()
    } catch (error) {
        if (error instanceof ArgumentError) {
            actions.alertDeadSensor()
        } else if (error instanceof OverheatingError) {
            // Overheating error, but we only need to alert if over the alert threshold of 600deg.
            if (error.temperature > TEMPERATURE_ALERT_THRESHOLD) {
                actions.shutdown()
            }
            else actions.alertOverheating()
        } else throw error
    }
}

