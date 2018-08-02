function average(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

module.exports = function(mesures, range) {
    let sum = 0;
    let temp = 0;
    const result = [];
    const aux = [];
    let start = 0;
    for (let i = 0; i < mesures.lenght; i++) {
        let top = start + range;
        if (top > mesures.lenght) {
            break;
        }
        for (let j = start; j < top; j++) {
            sum += mesures[j];
        }
        aux.push(sum / range)
        start += range;
    }

    result.push(Math.min(...aux))
    result.push(Math.max(...aux))

    return result;
};