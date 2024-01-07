const {countingValleys: sut} = require("./counting-valleys")
describe("supplied tests", ()=> {
    test('basic 1', ()=>{
        const given = [8, "UDDDUDUU"];
        const expected = 1;

        const result = sut(...given)

        expect(result).toEqual(expected);
    })

    test('basic 2', ()=>{
        const given = [12, "DDUUDDUDUUUD"];
        const expected = 2;

        const result = sut(...given)

        expect(result).toEqual(expected);
    })

    test('text example', ()=>{
        const given = [8, "DDUUUUDD"];
        const expected = 1;

        const result = sut(...given)

        expect(result).toEqual(expected);
    })

    test('single dip', ()=>{
        const given = [2, "DU"];
        const expected = 1;

        const result = sut(...given)

        expect(result).toEqual(expected);
    })

    test('single up', ()=>{
        const given = [2, "UD"];
        const expected = 0;

        const result = sut(...given)

        expect(result).toEqual(expected);
    })
})