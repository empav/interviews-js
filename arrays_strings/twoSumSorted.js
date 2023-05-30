//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

const twoSum = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  //Need to sort the array
  nums.sort((a, b) => a - b);

  while (left <= right) {
    const sum = nums[left] + nums[right];
    if (sum > target) {
      right--;
    } else if (sum === target) {
      return true;
    } else {
      left++;
    }
  }
  return false;
};

// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [-1, -1];
// };

console.log(twoSum([3, 2, 4], 6));
