//https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const inDegree = Array(n)
    .fill()
    .map(() => new Set());

  for (const [from, to] of edges) {
    inDegree[to].add(from);
  }

  for (const inD of inDegree) {
    for (const inDKey of inD) {
      for (const k of inDegree[inDKey]) {
        inD.add(k);
      }
    }
  }
  return inDegree.map((inD) => [...inD].sort((a, b) => a - b));
};

console.log(
  getAncestors(8, [
    [0, 3],
    [0, 4],
    [1, 3],
    [2, 4],
    [2, 7],
    [3, 5],
    [3, 6],
    [3, 7],
    [4, 6],
  ])
);
