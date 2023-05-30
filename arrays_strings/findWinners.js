//https://leetcode.com/problems/find-players-with-zero-or-one-losses/editorial/

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const zeroLoss = new Set();
  const oneLoss = new Set();
  const moreThanOneLoss = new Set();

  for (const [w, l] of matches) {
    //Add winner
    if (!oneLoss.has(w) && !moreThanOneLoss.has(w)) {
      zeroLoss.add(w);
    }
    if (zeroLoss.has(l)) {
      zeroLoss.delete(l);
      oneLoss.add(l);
    } else if (oneLoss.has(l)) {
      oneLoss.delete(l);
      moreThanOneLoss.add(l);
    } else if (moreThanOneLoss.has(l)) {
      continue;
    } else oneLoss.add(l);
  }

  return [
    [...Array.from(zeroLoss).sort((a, b) => a - b)],
    [...Array.from(oneLoss).sort((a, b) => a - b)],
  ];
};

const [zeroLossPlayers, oneLossPlayers] = findWinners([
  [1, 5],
  [2, 5],
  [2, 8],
  [2, 9],
  [3, 8],
  [4, 7],
  [4, 9],
  [5, 7],
  [6, 8],
]);

console.log(zeroLossPlayers, oneLossPlayers);
