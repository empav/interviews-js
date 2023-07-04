//https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const outDegree = Array(n + 1).fill(0);
  const inDegree = Array(n + 1).fill(0);

  for (const [x, y] of trust) {
    outDegree[x]++;
    inDegree[y]++;
  }

  let ans = [];
  for (let i = 1; i < n + 1; i++) {
    if (outDegree[i] === 0 && inDegree[i] === n - 1) {
      ans.push(i);
    }
  }
  return ans.length ? ans[0] : -1;
};

console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
);
