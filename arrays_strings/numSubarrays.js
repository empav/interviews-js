//https://leetcode.com/problems/subarray-product-less-than-k/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numSubarray = function (nums) {
  return (nums.length * (nums.length + 1)) / 2;
};

console.log(numSubarray([10, 5, 2, 6]));
