const {testEachWith} = require('../../__test-helpers/testEachWith');
const {simpleArraySum} = require('./simple-array-sum');

const testEachWith_ = testEachWith(simpleArraySum);

describe('sample test cases', () => {
    testEachWith_(
        {
            name: 'sample test case 0',
            given: [
                [1,2,3,4,10,11]
            ],
            expected: 31,
        },
    )
});

describe('personal test cases', () => {
    testEachWith_(
        {
            name: 'single item',
            given: [
                [1]
            ],
            expected: 1,
        },
        {
            name: 'multiple',
            given: [
                [1,2,3,4,5,6,7,8,9,10]
            ],
            expected: 55,
        },
    );
});

describe('error test cases', () => {
    testEachWith_(
        {
            name: 'no array',
            given: [
                undefined
            ],
            expected: undefined,
        },
        {
            name: 'null array',
            given: [
                null
            ],
            expected: undefined,
        },
        {
            name: 'empty array',
            given: [
                []
            ],
            expected: 0,
        },
        {
            name: 'missing items',
            given: [
                [1,undefined,23]
            ],
            expected: 24,
        },
        {
            name: 'null items',
            given: [
                [1,null,23]
            ],
            expected: 24,
        },
    );
});