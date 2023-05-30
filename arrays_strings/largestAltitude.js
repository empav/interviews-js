//https://leetcode.com/problems/find-the-highest-altitude/

/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  let partial = 0;
  let max = 0;

  for (let i = 0; i < gain.length; i += 1) {
    partial += gain[i];
    if (partial > max) max = partial;
  }

  return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
