function Assert(msg, verificador, esperado) {
    try {
        if (verificador !== esperado) {
            throw new Error(`${msg} fail. Wait '${esperado}', but came '${verificador}'`);
        }
        console.log(msg + " Pass");
    } catch (e) {
        if (e === esperado) {
            console.log(msg + " Pass");
        } else {
            throw new Error(`${msg} fail. Wait '${esperado}', but came '${verificador}'`);

        }
    }
};

module.exports.Assert = Assert;