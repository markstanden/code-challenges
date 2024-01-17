const {testEachWith} = require('../../__test-helpers/testEachWith');
const {uniqueOccurrences} = require('./unique-number_of_occurrences');

const testEachWith_ = testEachWith(uniqueOccurrences);

describe('provided tests', () => {
    testEachWith_(
        {
            name: 'example test 1',
            given: [
                [1,2,2,1,1,3]
            ],
            expected: true,
        },
        {
            name: 'example test 2',
            given: [
                [1,2]
            ],
            expected: false,
        },
        {
            name: 'example test 3',
            given: [
                [-3,0,1,-3,1,1,1,-3,10,0]
            ],
            expected: true,
        },

    );
});