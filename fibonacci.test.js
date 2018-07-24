const testUtil = require('./testUtil');
const fibonacci = require('./fibonacci');

testUtil.AssertArray("given 0 then result is empty array", fibonacci.calc, 0, [])

let result = [1];
testUtil.AssertArray(`given 1 then result is ${result}`, fibonacci.calc, 1, result)

result = [1, 1]
testUtil.AssertArray(`given 2 then result is ${result}`, fibonacci.calc, 2, result)

result = [1, 1, 2]
testUtil.AssertArray(`given 3 then result is ${result}`, fibonacci.calc, 3, result)

result = [1, 1, 2, 3]
testUtil.AssertArray(`given 4 then result is ${result}`, fibonacci.calc, 4, result)

result = [1, 1, 2, 3, 5]
testUtil.AssertArray(`given 5 then result is ${result}`, fibonacci.calc, 5, result)