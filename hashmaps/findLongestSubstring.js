/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const findLongestSubstring = (s, k) => {
  let left = 0,
    right = 0,
    length = 0;

  const map = new Map();

  for (; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) map.delete(s[left]);
      left++;
    }
    length = Math.max(length, right - left + 1);
  }
  return length;
};

console.log(findLongestSubstring("eceba", 2));
