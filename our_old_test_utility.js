function compareArrays(arrayA, arrayB) {
    if (arrayA.length !== arrayB.length) {
        return false;
    }

    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] != arrayB[i]) {
            return false;
        }
    }
    return true;
}

function AssertArray({ msg, ft, params, expected }) {
    let result = ft(params);
    if (!compareArrays(result, expected)) {
        throw new Error(`${msg} fail. Wait '${expected}', but came '${result}'`);
    }
    console.log(msg + " Pass");
};

function Assert(msg, ft, params, expected) {
    let result = ft(params);
    if (result !== expected) {
        throw new Error(`${msg} fail. Wait '${expected}', but came '${result}'`);
    }
    console.log(msg + " Pass");
};

function AssertException(msg, ft, params) {
    try {
        Assert(msg, ft, params);
        throw new Error(`Exception didn't happen.`);
    } catch (e) {
        console.log(msg + " Pass");
    }
};

module.exports.Assert = Assert;
module.exports.AssertException = AssertException;
module.exports.AssertArray = AssertArray;