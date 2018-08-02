module.exports = (matrix) => {
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
