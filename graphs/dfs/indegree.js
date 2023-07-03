/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const indegree = Array(n).fill(0);

  for (const [, y] of edges) {
    indegree[y]++;
  }

  let ans = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      ans.push(i);
    }
  }
  return ans;
};

console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ])
);
