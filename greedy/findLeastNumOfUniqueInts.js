/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  let frequencies = new Map();
  for (const num of arr) {
    frequencies.set(num, (frequencies.get(num) || 0) + 1);
  }

  let ordered = [...frequencies.values()].sort((a, b) => a - b);

  while (k > 0) {
    let val = ordered[0];
    if (val <= k) {
      k -= val;
      ordered.shift();
    } else {
      break;
    }
  }

  return ordered.length;
};

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
