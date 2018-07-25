function calc(matrix) {

    if (matrix.length == 0) {
        return [];
    }

    return [Math.min(...matrix), Math.max(...matrix)];
}

module.exports.calc = calc;