//https://leetcode.com/problems/find-lucky-integer-in-an-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map();

  for (const a of arr) {
    map.set(a, (map.get(a) || 0) + 1);
  }

  let max = -Infinity;
  for (const [lucky, occ] of map) {
    if (lucky === occ) max = Math.max(max, lucky);
  }

  return max;
};

console.log(findLucky([2, 2, 3, 4]));
