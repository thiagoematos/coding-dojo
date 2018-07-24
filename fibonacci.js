const calc = (num) => {
    let result = []
    if (num > 0) {

        if (num >= 1) {
            result.push(1);
        }
        if (num >= 2) {
            result.push(1);
        }
        if (num > 2) {
            let last = result[1]
            let beforeLast = result[0]
            for (let i = 2; i < num; i++) {
                result[i] = last + beforeLast
                beforeLast = last
                last = result[i]
            }
        }

    }
    return result
}

module.exports.calc = calc