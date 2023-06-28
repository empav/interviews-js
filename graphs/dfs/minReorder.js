//https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const dfs = (node) => {
    for (const neighboor of graph.get(node)) {
      if (!seen[neighboor]) {
        if (roads.has(`${node},${neighboor}`)) {
          ans++;
        }
        seen[neighboor] = true;
        dfs(neighboor);
      }
    }
  };

  let ans = 0;
  const graph = new Map();
  const roads = new Set();
  const seen = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }
  for (const [x, y] of connections) {
    graph.get(x).push(y);
    graph.get(y).push(x);
    roads.add(`${x},${y}`);
  }
  seen[0] = true;
  dfs(0);
  return ans;
};

console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ])
);
