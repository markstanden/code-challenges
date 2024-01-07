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
            name: 'sample input 0',
            given: ['aba', 10],
            expected: 7,
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
        {
            name: 'single a repeated',
            given: ["a", 2],
            expected: 2,
        },
        {
            name: 'multiple a repeated',
            given: ["aa", 10],
            expected: 10,
        },
        {
            name: 'no a in string',
            given: ["b", 1],
            expected: 0,
        },
        {
            name: 'a start and end',
            given: ["aabcaabcaa", 20],
            expected: 12,
        },
        {
            name: 'number shorter than provided string',
            given: ["aabcaabcaa", 6],
            expected: 4,
        },
    );
});