//https://leetcode.com/problems/solving-questions-with-brainpower/

/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  let n = questions.length;
  let dp = new Array(n + 1).fill(0); // n + 1 to avoid out of bounds

  for (let i = n - 1; i >= 0; i--) {
    let j = i + questions[i][1] + 1;
    // need to make sure we don't go out of bounds
    dp[i] = Math.max(questions[i][0] + dp[Math.min(j, n)], dp[i + 1]);
  }

  return dp[0];
};

console.log(
  mostPoints([
    [3, 2],
    [4, 3],
    [4, 4],
    [2, 5],
  ])
);
