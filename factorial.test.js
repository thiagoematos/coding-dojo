const factorial = require('./factorial');
const testUtil = require('./testUtil');

testUtil.Assert("given ZERO then result is ONE", factorial.calc, 0, 1);
testUtil.Assert("given ONE then result is ONE", factorial.calc, 1, 1);
testUtil.AssertException("given 1000000 then result is Error", factorial.calc, 1000000);
testUtil.AssertException("given -5 then result is Error", factorial.calc, -5);
testUtil.Assert("given 3 then result is 6", factorial.calc, 3, 6);
