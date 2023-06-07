//https://leetcode.com/problems/largest-palindromic-number/

/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  if (Number(num) === 0) return '0';

  const arr = Array(10).fill(0);
  for (const n of num) arr[+n]++;

  let prefix = '';
  let suffix = '';
  let middle = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    const count = Math.floor(arr[i] / 2);
    if (count > 0) {
      const s = `${i}`.repeat(count);
      if (prefix || i > 0) {
        prefix += s;
        suffix = s + suffix;
        arr[i] -= count * 2;
      }
    }
    middle = !middle && arr[i] > 0 ? i : middle;
  }

  return prefix + middle + suffix;
};

console.log(largestPalindromic('444947137'));
