//https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4689/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = Array(nums.length);
  let left = 0,
    right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    let square;
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      square = nums[left++];
    } else {
      square = nums[right--];
    }
    result[i] = square * square;
  }
  return result;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
