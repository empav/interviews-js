//https://leetcode.com/problems/all-paths-from-source-to-target/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const dfs = function (node, curr) {
    if (node === graph.length - 1) {
      ans.push(curr);
      return;
    }

    for (let i = 0; i < graph[node].length; i++) {
      dfs(graph[node][i], [...curr, graph[node][i]]);
    }
  };

  const ans = [];
  dfs(0, [0]);
  return ans;
};

console.log(...allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
