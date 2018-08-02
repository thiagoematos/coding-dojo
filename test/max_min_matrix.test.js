const max_min_matrix = require('../src/max_min_matrix')

test('given an empty matrix then result is an empty matrix', () => expect(max_min_matrix([])).toEqual(expect.arrayContaining([])));
test('given an [1,2,3,4,5] matrix then result is [1,5]', () => expect(max_min_matrix([1, 2, 3, 4, 5])).toEqual(expect.arrayContaining([1, 5])));
test('given an [1,1] matrix then result is [1,1]', () => expect(max_min_matrix([1, 1])).toEqual(expect.arrayContaining([1, 1])));
test('given an [1] matrix then result is [1,1]', () => expect(max_min_matrix([1])).toEqual(expect.arrayContaining([1, 1])));
test('given an [-10, 5, 0, 10] matrix then result is [-10,10]', () => expect(max_min_matrix([-10, 5, 0, 10])).toEqual(expect.arrayContaining([-10, 10])));
test('given an [[1,2], [3,4], [5,6]] matrix then result is [1, 6]', () => expect(max_min_matrix([[1, 2], [3, 4], [5, 6]])).toEqual(expect.arrayContaining([1, 6])));
// test('given an [[[9,9],2], [3,4], [5,6]] matrix then result is [2, 9]', () => expect(max_min_matrix([[[9,9],2], [3,4], [5,6]])).toEqual(expect.arrayContaining([2, 9])));