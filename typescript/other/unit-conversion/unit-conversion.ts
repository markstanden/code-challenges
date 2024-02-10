/**
 * Valid units and their relative lengths in mm
 */
const units = {
    mm: 1,
    cm: 10,
    m: 1000,
    km: 1_000_000,
    inches: 25.4,
    feet: 304.8,
    yards: 914.4,
    miles: 1609344,
};

/**
 * valid units for conversion
 */
export type Unit = keyof typeof units;

/**
 * Converts values from one unit to another.
 * Valid units are keys in the 'units' object.
 * @param {Unit} from
 * @param {Unit} to
 * @param {number} value
 */
export function convert(from: Unit, to: Unit, value: number): number {
    if (units[from] && units[to]) {
        return (units[from] / units[to]) * value;
    }
    return value;
}
