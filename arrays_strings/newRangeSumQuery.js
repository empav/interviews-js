//https://leetcode.com/problems/range-sum-query-immutable/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) sum += this.nums[i];
  return sum;
};

const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
const param_1 = obj.sumRange(0, 2);
console.log("param_1: ", param_1);
