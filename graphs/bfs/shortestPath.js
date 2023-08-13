//https://leetcode.com/problems/shortest-path-in-binary-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1;

  const valid = (row, col) =>
    row >= 0 &&
    row < grid.length &&
    col >= 0 &&
    col < grid.length &&
    grid[row][col] === 0;

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, -1],
  ];
  const seen = [];
  for (let i = 0; i < grid.length; i++) {
    seen[i] = Array(grid.length).fill(false);
  }

  let queue = [[0, 0]];
  let steps = 0;

  while (queue.length) {
    const size = queue.length;
    const nextQueue = [];
    steps++;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue[i];
      if (row === grid.length - 1 && col === grid.length - 1) {
        return steps;
      }
      for (const [dx, dy] of dirs) {
        const nextRow = row + dy;
        const nextCol = col + dx;
        if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
          seen[nextRow][nextCol] = true;
          nextQueue.push([nextRow, nextCol]);
        }
      }
    }
    queue = nextQueue;
  }
  return -1;
};

console.log(
  shortestPathBinaryMatrix([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
);
