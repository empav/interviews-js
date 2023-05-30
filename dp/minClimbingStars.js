//https://leetcode.com/problems/min-cost-climbing-stairs/editorial/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let prevOne = 0,
    prevTwo = 0;

  for (let i = 2; i <= cost.length; i++) {
    let tmp = prevOne;
    prevOne = Math.min(prevTwo + cost[i - 2], prevOne + cost[i - 1]);
    prevTwo = tmp;
  }

  return prevOne;
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
