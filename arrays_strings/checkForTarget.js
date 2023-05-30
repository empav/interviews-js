//https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4501/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const checkForTarget = function (nums, target) {
  let i = 0,
    j = nums.length - 1;

  while (i <= nums.length - 1) {
    const sum = nums[i] + nums[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else return [nums[i], nums[j]];
  }
  return false;
};

console.log(checkForTarget([1, 2, 4, 6, 8, 9, 14, 15], 13));
