module.exports = function (word) {
    /*  let result = "";
      for (let i = palindrom.length - 1; i >= 0; i--) {
          result += palindrom[i];
      } */
    let reversedWord = word.split('').reverse().join('');
    return word.toLowerCase() == reversedWord.toLowerCase();
};
