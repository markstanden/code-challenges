const {testEachWith} = require('../../__test-helpers/testEachWith')
const {jumpingOnTheClouds} = require('./jumping-on-the-clouds');

const testEachWith_ = testEachWith(jumpingOnTheClouds);

describe('supplied test cases', () => {
    testEachWith_(
        {
            name: 'text example',
            given: [0, 1, 0, 0, 0, 1, 0],
            expected: 3,
        },
        {
            name: 'sample input 0',
            given: [0, 0, 1, 0, 0, 1, 0],
            expected: 4,
        },
        {
            name: 'sample input 1',
            given: [0, 0, 0, 0, 1, 0],
            expected: 3,
        },
        {
            name: 'sample test case 1',
            given: [0, 0, 0, 1, 0, 0],
            expected: 3,
        },
    );
});

describe('personal test cases', () => {
    testEachWith_(
        {
            name: 'single hop',
            given: [0, 0],
            expected: 1,
        },
        {
            name: 'none need skips',
            given: [0, 1, 0, 1, 0, 1, 0],
            expected: 3,
        },
        {
            name: 'all need skips',
            given: [0, 1, 0, 0, 1, 0, 0, 1, 0],
            expected: 5,
        },
        {
            name: 'multiple even hops at the start',
            given: [0, 0, 0, 0, 1, 0],
            expected: 3,
        },
        {
            name: 'multiple odd hops at the start',
            given: [0, 0, 0, 1, 0],
            expected: 2,
        },
        {
            name: 'multiple even hops at the end',
            given: [0, 1, 0, 0, 0, 0],
            expected: 3,
        },
        {
            name: 'multiple odd hops at the end',
            given: [0, 1, 0, 0, 0],
            expected: 2,
        },
    );
});