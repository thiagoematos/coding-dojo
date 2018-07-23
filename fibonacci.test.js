const testUtil = require('./testUtil');
const fibonacci = require('./fibonacci');

testUtil.AssertArray("given 0 then result is empty array", fibonacci.calc, 0, [])
testUtil.AssertArray("given 1 then result is empty array", fibonacci.calc, 1, [1])
testUtil.AssertArray("given 2 then result is empty array", fibonacci.calc, 2, [1, 1])
testUtil.AssertArray("given 3 then result is empty array", fibonacci.calc, 3, [1, 1, 2])
testUtil.AssertArray("given 4 then result is empty array", fibonacci.calc, 4, [1, 1, 2, 3])