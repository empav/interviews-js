//https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {
  let left = 0,
    right = heights.length - 1,
    maxArea = -1;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(heights[left], heights[right]) * (right - left)
    );

    if (heights[left] <= heights[right]) left++;
    else right--;
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
