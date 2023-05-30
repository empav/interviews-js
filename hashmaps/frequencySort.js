//https://leetcode.com/problems/sort-characters-by-frequency/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return [...map.entries()]
    .sort(([, occA], [, occB]) => occB - occA)
    .map(([char, occ]) => {
      if (occ === 1) return char;
      const chars = [char];
      for (let i = 1; i < occ; i++) {
        chars.push(char);
      }
      return chars.join("");
    })
    .join("");
};

console.log(frequencySort("tree"));
