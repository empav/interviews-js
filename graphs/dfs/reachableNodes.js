/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
  const dfs = (node) => {
    for (const next of graph[node]) {
      if (!seen[next] && !restricted.includes(next)) {
        seen[node] = true;
        max++;
        dfs(next);
      }
    }
  };

  const seen = Array(n).fill(false);
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (const [x, y] of edges) {
    graph[x].push(y);
    graph[y].push(x);
  }

  let max = 1;
  dfs(0);
  return max;
};

console.log(
  reachableNodes(
    7,
    [
      [0, 1],
      [0, 2],
      [0, 5],
      [0, 4],
      [3, 2],
      [6, 5],
    ],
    [4, 2, 1]
  )
);
