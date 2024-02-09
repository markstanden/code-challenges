import {describe, expect, it} from "vitest";
import {convert, Unit} from "./unit-conversion";

describe('unit conversion test', () => {
    it('returns the same value if to and from units are the same', () => {
        const from: Unit = "mm";
        const to: Unit = "mm";
        const value = 1;

        const result = convert(from, to, value);
        const expected = 1;

        expect(result).toBe(expected);
    })
})

describe('returns the correct value for simple metric conversions', () => {
    it('mm -> cm', () => {
        const from: Unit = "mm";
        const to: Unit = "cm";
        const value = 1;

        const result = convert(from, to, value);
        const expected = 0.1;

        expect(result).toBe(expected);
    })

    it('m -> cm', () => {
        const from: Unit = "m";
        const to: Unit = "cm";
        const value = 1;

        const result = convert(from, to, value);
        const expected = 100;

        expect(result).toBe(expected);
    })

    it('km -> m', () => {
        const from: Unit = "km";
        const to: Unit = "m";
        const value = 1;

        const result = convert(from, to, value);
        const expected = 1000;

        expect(result).toBe(expected);
    })
})

describe('returns the correct value for simple imperial conversions', () => {
    it('inches -> feet', () => {
        const from: Unit = "inches";
        const to: Unit = "feet";
        const value = 144;

        const result = convert(from, to, value);
        const expected = 12;

        expect(result).toBe(expected);
    })

    it('yards -> feet', () => {
        const from: Unit = "yards";
        const to: Unit = "feet";
        const value = 10;

        const result = convert(from, to, value);
        const expected = 30;

        expect(result).toBe(expected);
    })

    it('inches -> yards', () => {
        const from: Unit = "inches";
        const to: Unit = "yards";
        const value = 432;

        const result = convert(from, to, value);
        const expected = 12;

        expect(result).toBe(expected);
    })

    it('miles -> feet', () => {
        const from: Unit = "miles";
        const to: Unit = "feet";
        const value = 1;

        const result = convert(from, to, value);
        const expected = 5280;

        expect(result).toBe(expected);
    })
});