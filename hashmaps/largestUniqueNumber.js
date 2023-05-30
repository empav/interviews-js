/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let max = 0;
  for (const [num,occ] of map) {
    if (num > max && occ === 1) {
      max = num;
    }
  }
  return max;
};

console.log(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]));
