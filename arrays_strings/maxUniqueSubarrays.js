//https://leetcode.com/problems/maximum-erasure-value/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let map = {},
    max = 0,
    sum = 0;

  for (let left = 0, right = 0; right < nums.length; right++) {
    sum += nums[right];
    map[nums[right]] ? map[nums[right]]++ : (map[nums[right]] = 1);
    while (map[nums[right]] > 1) {
      map[nums[left]]--;
      sum = sum - nums[left];
      left++;
    }
    max = Math.max(max, sum);
  }
  return max;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
