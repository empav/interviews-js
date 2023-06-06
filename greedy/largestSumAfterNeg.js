//https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let lowestPos = 0;
  for (let i = 0; i < k; i++) {
    // keep track of the lowest positive number
    if (nums[i] < nums[lowestPos]) lowestPos = i;
    // if the number is negative, flip it, otherwise continue to flip the lowest positive number
    nums[i] < 0 ? (nums[i] = -nums[i]) : (nums[lowestPos] = -nums[lowestPos]);
  }
  return nums.reduce((a, b) => a + b);
};

console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));
