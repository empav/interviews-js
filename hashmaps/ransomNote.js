//https://leetcode.com/problems/ransom-note/description/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (const char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const rn of ransomNote) {
    if (!map.has(rn)) return false;
    if (map.get(rn) - 1 === 0) map.delete(rn);
    else map.set(rn, map.get(rn) - 1);
  }

  return true;
};

console.log(canConstruct("aa", "ab"));
