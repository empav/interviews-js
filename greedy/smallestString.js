//https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  let res = [];
  while (n--) {
    const diff = k - n;
    if (diff > 26) {
      res.push('z');
      k -= 26;
    } else {
      res.push(String.fromCharCode(96 + diff));
      k -= diff;
    }
  }
  return res.reverse().join('');
};

console.log(getSmallestString(5, 73));
