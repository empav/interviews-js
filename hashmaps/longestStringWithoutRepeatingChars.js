/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0,
    left = 0,
    map = new Map();

  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.get(s[right]) > 1) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

console.log(lengthOfLongestSubstring("pwwkew"));
