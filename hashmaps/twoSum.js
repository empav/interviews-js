//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }

    map.set(nums[i], i);
  }

  return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9));
