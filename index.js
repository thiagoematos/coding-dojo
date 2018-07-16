function isPalindrom(palindrom) {
    /*  let result = "";
      for (let i = palindrom.length - 1; i >= 0; i--) {
          result += palindrom[i];
      } */
    let result = palindrom.split("").reverse().join("");
    return palindrom.toLowerCase() == result.toLowerCase();
}
module.exports.isPalindrom = isPalindrom;  