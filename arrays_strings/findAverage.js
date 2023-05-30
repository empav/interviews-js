//https://leetcode.com/problems/maximum-average-subarray-i/editorial/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) sum += nums[i];

  let res = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    res = Math.max(res, sum);
  }

  return res / k;
};

console.log(findMaxAverage([0, 1, 1, 3, 3], 4));
