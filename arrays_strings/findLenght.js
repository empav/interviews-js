/* Given an array of positive integers nums and an integer k,
 find the length of the longest subarray whose sum is less than or equal to k. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findLength = function (nums, k) {
  let left = 0,
    right = 0,
    sum = 0,
    length = 0;

  while (right < nums.length) {
    sum += nums[right];
    while (sum > k) {
      sum -= nums[left++];
    }
    length = Math.max(length, right - left + 1);
    right++;
  }

  return length;
};

const length = findLength([3, 1, 2, 7, 4, 2, 1, 1, 5], 8);
console.log("length", length);
