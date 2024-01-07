const {testEach} = require('../../__test-helpers/testEach')
const {jumpingOnTheClouds} = require('./jumping-on-the-clouds');

describe('supplied test cases', () => {
    testEach(
        {
            name: 'text example',
            sut: jumpingOnTheClouds,
            given: [0, 1, 0, 0, 0, 1, 0],
            expected: 3,
        },
        {
            name: 'sample input 0',
            sut: jumpingOnTheClouds,
            given: [0, 0, 1, 0, 0, 1, 0],
            expected: 4,
        },
        {
            name: 'sample input 1',
            sut: jumpingOnTheClouds,
            given: [0, 0, 0, 0, 1, 0],
            expected: 3,
        },
    );
});

describe('personal test cases', () => {
    testEach(
        {
            name: 'single hop',
            sut: jumpingOnTheClouds,
            given: [0, 0],
            expected: 1,
        },
        {
            name: 'none need skips',
            sut: jumpingOnTheClouds,
            given: [0, 1, 0, 1, 0, 1, 0],
            expected: 3,
        },
        {
            name: 'all need skips',
            sut: jumpingOnTheClouds,
            given: [0, 1, 0, 0, 1, 0, 0, 1, 0],
            expected: 5,
        },
    );
});