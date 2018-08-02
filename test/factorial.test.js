const factorial = require('../src/factorial');

test('given ZERO then result is ONE', () => expect(factorial(0)).toBe(1));
test('given ONE then result is ONE', () => expect(factorial(1)).toBe(1));
test('given 3 then result is 6', () => expect(factorial(3)).toBe(6));
test('given 1000000 then result is Error', () => expect(() => factorial(1000000)).toThrow());
test('given -5 then result is Error', () => expect(() => factorial(-5)).toThrow());