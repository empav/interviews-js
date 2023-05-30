//https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const dp = [[1]];

  for (let i = 1; i < numRows; i++) {
    let right = 1;
    const subarray = [1, 1];
    const last = dp[dp.length - 1];
    while (right < last.length) {
      subarray.splice(right, 0, last[right - 1] + last[right]);
      right++;
    }
    dp.push(subarray);
  }
  return dp;
};

console.log(generate(5));
