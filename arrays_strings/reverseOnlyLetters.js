//https://leetcode.com/problems/reverse-only-letters/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let l = 0,
    r = s.length - 1,
    arr = [...s];

  while (l < r) {
    if (!/^[ a-z]+$/i.test(arr[l])) {
      l++;
      continue;
    }
    if (!/^[ a-z]+$/i.test(arr[r])) {
      r--;
      continue;
    }

    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }

  return arr.join("");
};

console.log(reverseOnlyLetters("ab-cd"));
