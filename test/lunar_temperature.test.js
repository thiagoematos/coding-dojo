const average = require('../src/lunar_temperature');

test('Mesures: [1] Range: 1', () => {
    expect(average([1], 1)).toEqual(expect.arrayContaining([1, 1]));
});

test('Mesures: [-5,-12, 0, 6] Range: 2', () => {
    expect(average([-5, -12, 0, 6], 2)).toEqual(expect.arrayContaining([-8, 3]));
});