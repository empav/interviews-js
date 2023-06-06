//https://leetcode.com/problems/maximum-ice-cream-bars/

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);

  if (costs[0] > coins) return 0;

  let i = 0;
  while (i < costs.length && coins - costs[i] > 0) {
    coins -= costs[i++];
  }
  return i;
};

console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20));
