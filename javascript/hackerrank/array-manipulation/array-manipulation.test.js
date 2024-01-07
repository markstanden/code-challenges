const {testEachWith} = require('../../__test-helpers/testEachWith');
const {arrayManipulation} = require('./array-manipulation');

const testEachWith_ = testEachWith(arrayManipulation);

describe('supplied test cases', () => {
    testEachWith_(
        {
            name: 'sample test case 0',
            given: [5,
                [
                    [1, 2, 100],
                    [2, 5, 100],
                    [3, 4, 100],
                ],
            ],
            expected: 200,
        },
        {
            name: 'sample test case 1',
            given: [10,
                [
                    [1, 5, 3],
                    [4, 8, 7],
                    [6, 9, 1],
                ],
            ],
            expected: 10,
        },
        {
            name: 'sample test case 2',
            given: [10,
                [
                    [2, 6, 8],
                    [3, 5, 7],
                    [1, 8, 1],
                    [5, 9, 15],
                ],
            ],
            expected: 10,
        },
    );
});

describe('personal test cases', () => {
    testEachWith_(
        {
            name: 'single cell',
            given: [1,
                [
                    [1, 1, 1],
                ]
            ],
            expected: 1,
        },
        {
            name: 'single cell two queries',
            given: [1,
                [
                    [1, 1, 1],
                    [1, 1, 1],
                ]
            ],
            expected: 0,
        },
        {
            name: 'single cell outside range',
            given: [1,
                [
                    [2, 2, 1],
                ]
            ],
            expected: 0,
        },
    );
});