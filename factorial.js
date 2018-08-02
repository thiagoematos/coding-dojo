function factorial(num) {
    if (num == 1 || num == 0) {
        return 1;
    }
    if (num < 0 || num > 99999) {
        throw new Error();
    }
    return num * factorial(num - 1);
}

module.exports = factorial;