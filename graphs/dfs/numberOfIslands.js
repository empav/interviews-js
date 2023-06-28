//https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const valid = (row, col) =>
    0 <= row && row < m && 0 <= col && col < n && grid[row][col] === '1';

  const dfs = (row, col) => {
    for (const [dx, dy] of directions) {
      const nextRow = row + dy;
      const nextCol = col + dx;
      if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
        seen[nextRow][nextCol] = true;
        dfs(nextRow, nextCol);
      }
    }
  };

  const m = grid.length;
  const n = grid[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const seen = [];
  for (let i = 0; i < m; i++) {
    seen[i] = Array(n).fill(false);
  }

  let ans = 0;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === '1' && !seen[row][col]) {
        ans++;
        seen[row][col] = true;
        dfs(row, col);
      }
    }
  }
  return ans;
};

console.log(
  numIslands([
    ['1', '1', '0', '0', '0', '1'],
    ['0', '1', '0', '0', '0', '0'],
    ['0', '1', '1', '0', '1', '1'],
    ['0', '0', '0', '0', '0', '1'],
    ['1', '1', '1', '1', '0', '1'],
    ['1', '1', '1', '1', '0', '1'],
  ])
);
