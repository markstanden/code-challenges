const {lengthOfLIS: sut} = require('./longest_increasing_subsequence');
describe('Site provided tests', ()=>{
    test('test 1', ()=>{
        const given = [10,9,2,5,3,7,101,18];
        const expected = 4;

        const result = sut(given);

        expect(result).toEqual(expected)
    })

    test('test 2', ()=>{
        const given = [0,1,0,3,2,3];
        const expected = 4;

        const result = sut(given);

        expect(result).toEqual(expected)
    })

    test('given the same value the result is 1', ()=>{
        const given = [7,7,7,7,7,7,7];
        const expected = 1;

        const result = sut(given);

        expect(result).toEqual(expected)
    })

    test('given a descending sequence the result is 1', ()=>{
        const given = [7,6,5,4,3,2,1];
        const expected = 1;

        const result = sut(given);

        expect(result).toEqual(expected)
    })

    test('given a ascending sequence the result is the length of the array', ()=>{
        const given = [1,2,3,4,5,6,7];
        const expected = 7;

        const result = sut(given);

        expect(result).toEqual(expected)
    })
})