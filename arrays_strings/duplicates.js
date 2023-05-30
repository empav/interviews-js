//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const lastIdx = nums.lastIndexOf(nums[i]);
    if (lastIdx !== i) nums.splice(i + 1, lastIdx - i);
  }
  return nums;
};

console.log("k", removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4]));
