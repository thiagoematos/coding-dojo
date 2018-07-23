const calc = (num) => {
    let result = []
    if (num > 0) {

        if (num === 1) {
            result = [1]
        } else if (num === 2) {
            result = [1, 1]
        } else {
            let last = result[1]
            let beforeLast = result[0]
            for (let i = 2; i < num; i++) {
                result[i] = last + beforeLast
                beforeLast = last
                last = beforeLast + last
            }
        }

    }

    console.log(result)

    return result
}
module.exports.calc = calc