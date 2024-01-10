const {testEachWith} = require('../../__test-helpers/testEachWith');
const {objectMerge} = require('./object-merge');

const testEachWith_ = testEachWith(objectMerge);

describe('alters field information', () => {
    testEachWith_(
        {
            name: 'updated first level field',
            given: [
                {"test": "test"},
                {"test": "test2"},
            ],
            expected: {"test": "test2"},
        },
        {
            name: 'updated second level field',
            given: [
                {"test": {"name": "test"}},
                {"test": {"name": "test2"}},
            ],
            expected: {"test": {"name": "test2"}},
        },
        {
            name: 'updated third level field',
            given: [
                {"describe": {"test": {"name": "test"}}},
                {"describe": {"test": {"name": "test2"}}},
            ],
            expected: {"describe": {"test": {"name": "test2"}}},
        },
        {
            name: 'updated multi level field',
            given: [
                {"company":{"repo":{"package":{"module":{"function":{"describe":{"test":{"name":"test"}}}}}}}},
                {"company":{"repo":{"package":{"module":{"function":{"describe":{"test":{"name":"test2"}}}}}}}},
            ],
            expected: {"company":{"repo":{"package":{"module":{"function":{"describe":{"test":{"name":"test2"}}}}}}}},
        },
    );
});

describe('does not destroy existing information on branches', () => {
    testEachWith_(
        {
            name: 'updated first level field',
            given: [
                {"test": "test", "other": "test"},
                {"test": "test2"},
            ],
            expected: {"test": "test2", "other": "test"},
        },
        {
            name: 'updated second level field',
            given: [
                {"test": {"name": "test"}, "other": "test"},
                {"test": {"name": "test2"}},
            ],
            expected: {"test": {"name": "test2"}, "other": "test"},
        },
        {
            name: 'updated third level field',
            given: [
                {"describe": {"test": {"name": "test"}, "other": "test"}, "other": "test"},
                {"describe": {"test": {"name": "test2"}}},
            ],
            expected: {"describe": {"test": {"name": "test2"}, "other": "test"}, "other": "test"},
        },
        {
            name: 'updated multi level field',
            given: [
                {"company":{"repo":{"package":{"module":{
                    "function":{"describe":{"test":{"name":"test"}}}
                }}}}},
                {"company":{"repo":{"package":{"module":{
                    "author":"Testy McTestFace",
                    "hobbies":["Testing"],
                    "other":{
                        "company":{
                            "name":"Name",
                            "address":"Address",
                        }
                    }
                }}}}},
            ],
            expected: {"company":{"repo":{"package":{"module":{
                "function":{"describe":{"test":{"name":"test2"}}},
                "author":"Testy McTestFace",
                "hobbies":["Testing"],
                "other":{
                    "company":{
                        "name":"Name",
                        "address":"Address",
                    }
                }
            }}}}},
        },
    );
});

describe('potential error test cases', () => {
    testEachWith_(
        {
            name: 'empty target',
            given: [
                {},
                {test:"test"},
            ],
            expected: {test:"test"},
        },
        {
            name: 'empty addition',
            given: [
                {test:"test"},
                {},
            ],
            expected: {test:"test"},
        },
        {
            name: 'empty target and addition',
            given: [
                {},
                {},
            ],
            expected: {},
        },
        {
            name: 'null target',
            given: [
                null,
                {test:"test"},
            ],
            expected: {test:"test"},
        },
        {
            name: 'null addition',
            given: [
                {test:"test"},
                null,
            ],
            expected: {test:"test"},
        },
        {
            name: 'null target and addition',
            given: [
                null,
                null,
            ],
            expected: {},
        },
        {
            name: 'empty target',
            given: [
                {},
                {test:"test"},
            ],
            expected: {test:"test"},
        },
        {
            name: 'empty addition',
            given: [
                {test:"test"},
                {},
            ],
            expected: {test:"test"},
        },
    );
});

describe('immutability tests', () => {
    test('target is not mutated', ()=>{
        const sut = objectMerge

        const givenTarget = {
            test: "test"
        };

        const givenAddition = {
            testing: "testing"
        };

        const expected = {
            test: "test"
        };

        sut(givenTarget, givenAddition);

        expect(givenTarget).toEqual(expected);
        expect(givenTarget[testing]).toEqual(undefined);
    })
})