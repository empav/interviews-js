/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const dfs = (node) => {
    if (node === destination) return true;
    if (!seen[node]) {
      seen[node] = true;
      for (const next of graph[node]) {
        if (dfs(next)) return true;
      }
    }
    return false;
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

  return dfs(source);
};

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
