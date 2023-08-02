//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let ans = 0,
    left = 0,
    right = 0,
    map = new Map();

  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.get(s[right]) > 1) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }

    ans = Math.max(ans, right - left + 1);
    right++;
  }
  return ans;
};

const input = "abcabcbb";
console.log(lengthOfLongestSubstring(input));
