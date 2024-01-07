function testEach(...tests) {
    tests.forEach(testCase => test(testCase.name, () => {
        const result = testCase.sut(...testCase.given);
        expect(result).toEqual(testCase.expected);
    }));
}

module.exports = {testEach}
//export {testEach};