//https://leetcode.com/problems/get-equal-substrings-within-budget/

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
const equalSubstring = function (s, t, maxCost) {
  let total = 0,
    max = 0,
    left = 0,
    right = 0;

  while (right < s.length) {
    if (maxCost === 0) {
      if (s[right] === t[right]) {
        total++;
        max = Math.max(max, total);
      } else total = 0;
      right++;
    } else {
      total += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
      if (total <= maxCost) {
        max = Math.max(max, right - left + 1);
      } else {
        total -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
        left++;
      }
      right++;
    }
  }

  return max;
};

console.log(equalSubstring("abcd", "acde", 0));
