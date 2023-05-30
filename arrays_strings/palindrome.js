//https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const stringed = String(x);
  return [...stringed].reverse().join("") === stringed;
};

console.log("isPalindrome", isPalindrome(121));
console.log("isPalindrome", isPalindrome(122));
console.log("isPalindrome", isPalindrome(-121));
