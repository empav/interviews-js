//https://leetcode.com/problems/jewels-and-stones/description/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const map = new Map();

  for (const char of stones) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let count = 0;
  for (const rn of jewels) {
    if (!map.has(rn)) continue;
    count += map.get(rn);
  }

  return count;
};

console.log(numJewelsInStones("z", "ZZ"));
