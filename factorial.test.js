const factorial = require('./factorial');
const testUtil = require('./testUtil');

testUtil.Assert("given ZERO then result is ONE", factorial.calc(0), 1);
testUtil.Assert("given ONE then result is ONE", factorial.calc(1), 1);
testUtil.Assert("given 1000000 then result is ONE", factorial.calc(1000000), new Error());