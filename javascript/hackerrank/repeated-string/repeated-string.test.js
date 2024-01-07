const {testEachWith} = require('../../__test-helpers/testEachWith')
const {repeatedString} = require('./repeated-string');

const testEachWith_ = testEachWith(repeatedString);

describe('supplied test cases', () => {
    testEachWith_(
        {
            name: 'text example',
            given: ['abcac', 10],
            expected: 4,
        },
        {
            name: 'sample input 1',
            given: ['a', 1000000000000],
            expected: 1000000000000,
        },
    );
});

describe('personal test cases', () => {
    testEachWith_(
        {
            name: 'single a',
            given: ["a", 1],
            expected: 1,
        },
    );
});