//https://leetcode.com/problems/binary-subarrays-with-sum/

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  const counts = new Map();
  counts.set(0, 1);
  let ans = 0,
    curr = 0;

  for (const num of nums) {
    curr += num;
    ans += counts.get(curr - goal) || 0;
    counts.set(curr, (counts.get(curr) || 0) + 1);
  }

  return ans;
};

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
