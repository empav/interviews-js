//https://leetcode.com/problems/sum-of-unique-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  if (nums.length === 1) return nums[0];

  const map = new Map();

  for (const n of nums) {
    if (map.has(n)) map.set(n, map.get(n) + 1);
    else map.set(n, 1);
  }

  return [...map.entries()]
    .filter(([, occ]) => occ === 1)
    .map(([a]) => a)
    .reduce((a, b) => a + b);
};

console.log(sumOfUnique([1, 2, 3, 4, 5]));
