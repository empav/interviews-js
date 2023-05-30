//https://leetcode.com/problems/house-robber/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    // to prevent out of bounds error
    return nums[0];
  }

  // Base cases
  let backTwo = nums[0];
  let backOne = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let temp = backOne;
    backOne = Math.max(backOne, backTwo + nums[i]);
    backTwo = temp;
  }

  return backOne;
};

console.log(rob([2, 7, 9, 3, 1]));

// 1 -> 0,1 -> 0 + 1, 0
// 2 -> 0,2 -> 0 + 2, 1
// 3 -> 2,4 -> 1 + 3, 2
// 1 -> 4,4 -> 2 + 1, 4

// 2 -> 0 + 2, 0
// 7 -> 0 + 7, 2
// 9 -> 2 + 9, 7
// 3 -> 7 + 3, 11
// 1 -> 11 + 1, 11

//rob(i) = Math.max( rob(i - 2) + currentHouseValue, rob(i - 1) )
