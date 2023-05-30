//https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1

/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const sum = nums.reduce(function (a, b) {
    return a + b;
  });

  let visitedAndSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum - visitedAndSum - nums[i] === visitedAndSum) {
      return i;
    }
    visitedAndSum = visitedAndSum + nums[i];
  }

  return -1;
};

// console.log("pivot idx", pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log("pivot idx", pivotIndex([1, 2, 3]));
console.log("pivot idx", pivotIndex([-1, -1, 0, 0, -1, -1]));
