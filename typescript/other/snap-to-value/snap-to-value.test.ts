import { describe, it, expect } from 'vitest';
import { snapToIncrement } from './snap-to-value';

const smallIncrement = 0.00001;

describe('rounds to the nearest whole', () => {
    it('rounds down to the last whole number from just below a half', () => {
        const increments = 1;
        const value = 1 / 2 - smallIncrement;
        const expected = 0;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });
    it('rounds up to the next whole number from 1/2', () => {
        const increments = 1;
        const value = 1 / 2;
        const expected = 1;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });
});
describe('rounds to the nearest half', () => {
    it('rounds down to the last whole number from just below 1/4', () => {
        const increments = 2;
        const value = 1 / 4 - smallIncrement;
        const expected = 0;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });

    it('rounds up to half from 1/4', () => {
        const increments = 2;
        const value = 1 / 4;
        const expected = 0.5;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });

    it('rounds down to a half from just below 3/4', () => {
        const increments = 2;
        const value = 3 / 4 - smallIncrement;
        const expected = 0.5;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });

    it('rounds up to the next whole number from 3/4', () => {
        const increments = 2;
        const value = 3 / 4;
        const expected = 1;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });
});

describe('rounds to the nearest quarter', () => {
    it('rounds down from just under 1/8', () => {
        const increments = 4;
        const value = 10 + 1 / 8 - smallIncrement;
        const expected = 10;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });

    it('rounds up to a quarter from 1/8', () => {
        const increments = 4;
        const value = 10 + 1 / 8;
        const expected = 10.25;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });

    it('rounds down to a quarter from just under 3/8', () => {
        const increments = 4;
        const value = 10 + 3 / 8 - smallIncrement;
        const expected = 10.25;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });

    it('rounds up to a half from 3/8', () => {
        const increments = 4;
        const value = 10 + 3 / 8;
        const expected = 10.5;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });
    it('rounds down to a half from just under 5/8', () => {
        const increments = 4;
        const value = 10 + 5 / 8 - smallIncrement;
        const expected = 10.5;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });

    it('rounds up to three quarters from 5/8', () => {
        const increments = 4;
        const value = 10 + 5 / 8;
        const expected = 10.75;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });

    it('rounds down to a three quarters from just under 7/8', () => {
        const increments = 4;
        const value = 10 + 7 / 8 - smallIncrement;
        const expected = 10.75;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });

    it('rounds up to next whole number from 7/8', () => {
        const increments = 4;
        const value = 10 + 7 / 8;
        const expected = 11;

        const snapToWhole = snapToIncrement(increments);
        const result = snapToWhole(value);

        expect(result).toBe(expected);
    });
});
