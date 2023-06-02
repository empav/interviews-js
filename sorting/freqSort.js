/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map();
  for (let val of s) {
    map.set(val, (map.get(val) || 0) + 1);
  }
  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .map(([c, f]) => c.repeat(f))
    .join('');
};

console.log(frequencySort('cccaaa'));
