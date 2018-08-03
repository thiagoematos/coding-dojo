const sumElementsFromArrayByRange = (start, limit, mesures) => {
    let sum = 0;
    for (let j = start; j < limit; j++) {
        sum += mesures[j];
    }
    return sum;
}

module.exports = function(mesures, range) {

    const result = [];
    const aux = [];
    let start = 0;
    for (let i = 0; i < mesures.length; i++) {
        let limit = start + range;
        if (limit > mesures.length) {
            break;
        }
        const sum = sumElementsFromArrayByRange(start, limit, mesures)
        start += range;
        aux.push(Math.trunc(sum / range))

    }

    result.push(Math.min(...aux))
    result.push(Math.max(...aux))

    return result;
};