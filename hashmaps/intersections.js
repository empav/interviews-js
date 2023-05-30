//https://leetcode.com/problems/intersection-of-multiple-arrays/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const intersection = function (nums) {
  const map = new Map();
  const result = [];

  for (const subarray of nums) {
    for (const elem of subarray) {
      map.set(elem, (map.get(elem) || 0) + 1);
    }
  }

  for (const [k, v] of map) {
    if (v === nums.length) result.push(k);
  }

  result.sort((a, b) => a - b);

  return result;
};

console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
