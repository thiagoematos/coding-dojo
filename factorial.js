function calc(num) {
    if (num == 1 || num == 0) {
        return 1;
    }
    if (num < 0 || num > 99999) {
        throw new Error();
    }
    return num * calc(num - 1);
}
module.exports.calc = calc;
