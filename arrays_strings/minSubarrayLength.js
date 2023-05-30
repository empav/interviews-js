//https://leetcode.com/problems/minimum-size-subarray-sum/solutions/?languageTags=javascript

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let left = 0,
    right = 0,
    total = 0,
    result = 0;

  while (right < nums.length) {
    total += nums[right];

    while (total >= s) {
      const len = right - left + 1;
      result = result === 0 ? len : Math.min(result, len);
      total -= nums[left];
      left++;
    }
    right++;
  }

  return result;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
