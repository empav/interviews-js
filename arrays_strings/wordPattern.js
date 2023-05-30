//https://leetcode.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr = s.split(" ");

  if (pattern.length != arr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) !== arr.indexOf(arr[i])) return false;
  }
  return true;
};

console.log(wordPattern("aaaa", "dog cat cat dog"));

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
