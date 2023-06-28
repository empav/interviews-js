/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const dfs = (node) => {
    for (const neighbor of graph.get(node)) {
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        dfs(neighbor);
      }
    }
  };

  const graph = new Map();
  for (let i = 0; i < isConnected.length; i++) {
    graph.set(i, []);
  }

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = i + 1; j < isConnected.length; j++) {
      if (isConnected[i][j]) {
        graph.get(i).push(j);
        graph.get(j).push(i);
      }
    }
  }

  const seen = Array(isConnected.length).fill(false);
  let ans = 0;

  for (let i = 0; i < isConnected.length; i++) {
    if (!seen[i]) {
      ans++;
      seen[i] = true;
      dfs(i);
    }
  }
  return ans;
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
