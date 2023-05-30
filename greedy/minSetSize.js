//https://leetcode.com/problems/reduce-array-size-to-the-half/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  arr.sort((a, b) => b - a);
  const map = new Map();
  const set = new Set();

  for (const a of arr) {
    map.set(a, (map.get(a) || 0) + 1);
  }

  const frequencies = [...map.entries()].sort((a, b) => b[1] - a[1]);

  let n = arr.length;
  for (const freq of frequencies) {
    set.add(freq[0]);
    n -= freq[1];
    if (n <= arr.length / 2) {
      break;
    }
  }

  return set.size;
};

console.log(
  minSetSize([9, 77, 63, 22, 92, 9, 14, 54, 8, 38, 18, 19, 38, 68, 58, 19])
);
