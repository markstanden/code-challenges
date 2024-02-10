import { describe, expect, it } from 'vitest';
import { convert } from './unit-conversion';
import type { Unit } from './unit-conversion';

describe('edge cases', () => {
    it('returns the same value if to and from units are the same', () => {
        const from: Unit = 'feet';
        const to: Unit = 'feet';
        const value = 1;

        const result = convert(from, to, value);
        const expected = 1;

        expect(result).toBe(expected);
    });

    it('invalid units do not throw', () => {
        // @ts-ignore
        const from: Unit = 'mmm';
        // @ts-ignore
        const to: Unit = 'cmm';
        const value = 1;

        const resultCallback = () => convert(from, to, value);
        const expected = 1;

        expect(resultCallback).not.toThrow();
    });

    it('invalid *from* unit returns value', () => {
        // @ts-ignore
        const from: Unit = 'mmm';
        const to: Unit = 'cm';
        const value = 2;

        const result = convert(from, to, value);
        const expected = 2;

        expect(result).toBe(expected);
    });

    it('invalid *to* unit returns value', () => {
        const from: Unit = 'mm';
        // @ts-ignore
        const to: Unit = 'cmm';
        const value = 3;

        const result = convert(from, to, value);
        const expected = 3;

        expect(result).toBe(expected);
    });
});

describe('returns the correct value for simple metric conversions', () => {
    it('mm -> cm', () => {
        const from: Unit = 'mm';
        const to: Unit = 'cm';
        const value = 1;

        const result = convert(from, to, value);
        const expected = 0.1;

        expect(result).toBe(expected);
    });

    it('m -> cm', () => {
        const from: Unit = 'm';
        const to: Unit = 'cm';
        const value = 1;

        const result = convert(from, to, value);
        const expected = 100;

        expect(result).toBe(expected);
    });

    it('km -> m', () => {
        const from: Unit = 'km';
        const to: Unit = 'm';
        const value = 1;

        const result = convert(from, to, value);
        const expected = 1000;

        expect(result).toBe(expected);
    });
});

describe('returns the correct value for simple imperial conversions', () => {
    it('inches -> feet', () => {
        const from: Unit = 'inches';
        const to: Unit = 'feet';
        const value = 144;

        const result = convert(from, to, value);
        const expected = 12;

        expect(result).toBe(expected);
    });

    it('yards -> feet', () => {
        const from: Unit = 'yards';
        const to: Unit = 'feet';
        const value = 10;

        const result = convert(from, to, value);
        const expected = 30;

        expect(result).toBe(expected);
    });

    it('inches -> yards', () => {
        const from: Unit = 'inches';
        const to: Unit = 'yards';
        const value = 432;

        const result = convert(from, to, value);
        const expected = 12;

        expect(result).toBe(expected);
    });

    it('miles -> feet', () => {
        const from: Unit = 'miles';
        const to: Unit = 'feet';
        const value = 1;

        const result = convert(from, to, value);
        const expected = 5280;

        expect(result).toBe(expected);
    });
});

describe('accurate conversion of metric to imperial', () => {
    it('mm -> feet', () => {
        const from: Unit = 'mm';
        const to: Unit = 'feet';
        const value = 304.8;

        const result = convert(from, to, value);
        const expected = 1;

        expect(result).toBeCloseTo(expected, 3);
    });

    it('feet -> cm', () => {
        const from: Unit = 'feet';
        const to: Unit = 'cm';
        const value = 1;

        const result = convert(from, to, value);
        const expected = 30.48;

        expect(result).toBeCloseTo(expected, 3);
    });

    it('miles -> km', () => {
        const from: Unit = 'miles';
        const to: Unit = 'km';
        const value = 1;

        const result = convert(from, to, value);
        const expected = 1.609;

        expect(result).toBeCloseTo(expected, 3);
    });

    it('km -> miles', () => {
        const from: Unit = 'km';
        const to: Unit = 'miles';
        const value = 1;

        const result = convert(from, to, value);
        const expected = 0.621;

        expect(result).toBeCloseTo(expected, 3);
    });
});
