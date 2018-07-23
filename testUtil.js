function compareArrays(arrayA, arrayB) {
    // TODO: compare elements
    return arrayA.length == arrayB.length;
}

function AssertArray(msg, ft, params, expected) {
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