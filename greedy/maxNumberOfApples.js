//https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/description/

/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function (weight) {
  weight.sort((a, b) => a - b);
  let apples = 0,
    units = 0;
  for (let i = 0; i < weight.length && units + weight[i] <= 5000; i++) {
    apples++;
    units += weight[i];
  }
  return apples;
};

console.log(maxNumberOfApples([100, 200, 150, 1000]));
