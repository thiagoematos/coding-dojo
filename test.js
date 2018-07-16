const index = require('./index');

function testeUtil(msg, verificador, esperado) {
    if (verificador !== esperado) {
        throw new Error(`${msg} fail. Wait '${esperado}', but came '${verificador}'`);
    }
    console.log(msg + " Pass");
};

testeUtil("ana is palindrome", index.isPalindrom("ana"), true);
testeUtil("Ana is palidrome", index.isPalindrom("Ana"), true);
testeUtil("ABC is not palidrome", index.isPalindrom("ABC"), false);
testeUtil("A is palidrome", index.isPalindrom("A"), true);
testeUtil("FALSE is not palidrome", index.isPalindrom("FALSE"), false);
testeUtil("ZERO is palidrome", index.isPalindrom("0"), true);
testeUtil("111 is palidrome", index.isPalindrom("111"), true);
testeUtil("111 is palidrome", index.isPalindrom("111"), false);
