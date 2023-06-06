//https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let answer = 0;
  let hashTable = {};
  for (let char of s) {
    hashTable[char] = (hashTable[char] || 0) + 1;
    if (hashTable[char] % 2 === 0) {
      answer += 2;
    }
  }
  return s.length > answer ? answer + 1 : answer;
};

console.log(longestPalindrome('abccccdd'));
