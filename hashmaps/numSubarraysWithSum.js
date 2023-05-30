//https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarraysWithSum = function (nums, k) {
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

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
