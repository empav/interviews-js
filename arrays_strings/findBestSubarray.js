/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findBestSubarray = function (nums, k) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }

  let ans = curr;
  for (let i = k; i < nums.length; i++) {
    curr += nums[i] - nums[i - k];
    ans = Math.max(ans, curr);
  }

  return ans;
};

findBestSubarray([3, -1, 4, 12, -8, 5, 6], 4);
