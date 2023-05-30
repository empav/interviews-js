/**
 * @param {number[]} nums
 * @return {number[]}
 */
var prefixSum = function (nums) {
  const prefixSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = nums[i] + prefixSum[prefixSum.length - 1];
  }

  console.log('prefixSum', prefixSum);
};

prefixSum([3, -1, 4, 12, -8, 5, 6]);
