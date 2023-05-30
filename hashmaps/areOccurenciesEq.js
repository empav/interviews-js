//https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

/**
 * @param {string} s
 * @return {boolean}
 */
const areOccurrencesEqual = function (s) {
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  const frequencies = new Set();
  for (const val of map.values()) {
    frequencies.add(val);
  }

  return frequencies.size == 1;
};

console.log(areOccurrencesEqual("abacbc"));
