//https://leetcode.com/problems/maximal-network-rank/

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const graph = new Map();

  for (const [x, y] of roads) {
    if (!graph.has(x)) graph.set(x, []);
    if (!graph.has(y)) graph.set(y, []);
    graph.get(x).push(y);
    graph.get(y).push(x);
  }

  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let rank = (graph.get(i) || []).length + (graph.get(j) || []).length;
      if (graph.has(i) && graph.get(i).includes(j)) rank--;
      max = Math.max(max, rank);
    }
  }

  return max;
};

console.log(
  maximalNetworkRank(4, [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
  ])
);
