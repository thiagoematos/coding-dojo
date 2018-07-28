function calc(matrix) {
    if (matrix.length == 0) {
        return [];
    }

    const matrixFlatten = [];

    for (let item of matrix) {
        if (Array.isArray(item)) {
            matrixFlatten.push(...item);
        } else {
            matrixFlatten.push(item);
        }
    }

    return [Math.min(...matrixFlatten), Math.max(...matrixFlatten)];
}

const isArray = (...matrix) => {
    let arrayTemp = []
    while (Array.isArray(...matrix)) {
        arrayTemp = new Array(...matrix)
    }

    return arrayTemp
}

const f = (a) => {
    if (!Array.isArray(a)) {
        return a
    }
}

module.exports.calc = calc;