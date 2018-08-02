const isPalindrome = require('../src/palindrome');

test('ana is palindrome', () => expect(isPalindrome('ana')).toBeTruthy());
test('Ana is palindrome', () => expect(isPalindrome('Ana')).toBeTruthy());
test('ABC is not palindrome', () => expect(isPalindrome('ABC')).toBeFalsy());
test('A is palindrome', () => expect(isPalindrome('A')).toBeTruthy());
test('FALSE is not palindrome', () => expect(isPalindrome('FALSE')).toBeFalsy());
test('ZERO is palindrome', () => expect(isPalindrome('0')).toBeTruthy());
test('111 is palindrome', () => expect(isPalindrome('111')).toBeTruthy());