const {testEach} = require('./testEach');

function testEachWith(sut){
    return function(...tests) {
        tests.forEach(test => Object.assign(test, {sut}))
        testEach(...tests)
    }
}

module.exports = {testEachWith: testEachWith}