/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const valid = (row, col) =>
    0 <= row && row < nRows && 0 <= col && col < nCols && grid[row][col];

  const dfs = (row, col) => {
    for (const [dx, dy] of directions) {
      const nextRow = row + dy;
      const nextCol = col + dx;
      if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
        seen[nextRow][nextCol] = true;
        curr++;
        dfs(nextRow, nextCol);
      }
    }
  };

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const nRows = grid.length;
  const nCols = grid[0].length;
  const seen = [];
  for (let i = 0; i < nRows; i++) {
    seen[i] = Array(nCols).fill(false);
  }

  let curr = 0;
  let max = -Infinity;
  for (let row = 0; row < nRows; row++) {
    for (let col = 0; col < nCols; col++) {
      if (grid[row][col] && !seen[row][col]) {
        curr = 1;
        seen[row][col] = true;
        dfs(row, col);
        max = Math.max(max, curr);
      }
    }
  }

  return max === -Infinity ? 0 : max;
};

console.log(
  maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ])
);
