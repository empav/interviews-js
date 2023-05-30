//https://leetcode.com/problems/continuous-subarray-sum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const counts = new Map();
  counts.set(0, 1);
  let ans = 0,
    curr = 0;

  for (const num of nums) {
    curr += num;
    ans += counts.get(curr - k) || 0;
    counts.set(curr, (counts.get(curr) || 0) + 1);
  }

  return ans;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
