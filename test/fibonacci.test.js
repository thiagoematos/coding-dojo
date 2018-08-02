const fibonacci = require('../src/fibonacci');

test('given 0 then result is empty array', () => expect(fibonacci(0)).toEqual(expect.arrayContaining([])));
test('given 1 then result is [1]', () => expect(fibonacci(1)).toEqual(expect.arrayContaining([1])));
test('given 2 then result is [1,1]', () => expect(fibonacci(2)).toEqual(expect.arrayContaining([1, 1])));
test('given 3 then result is [1,1,2]', () => expect(fibonacci(3)).toEqual(expect.arrayContaining([1, 1, 2])));
test('given 4 then result is [1,1,2,3]', () => expect(fibonacci(4)).toEqual(expect.arrayContaining([1, 1, 2, 3])));
test('given 5 then result is [1,1,2,3,5]', () => expect(fibonacci(5)).toEqual(expect.arrayContaining([1, 1, 2, 3, 5])));
test('given 5 then result is [1,1,2,3,5,8]', () => expect(fibonacci(8)).toEqual(expect.arrayContaining([1, 1, 2, 3, 5, 8])));
