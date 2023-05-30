//https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) {
    return false;
  }

  let i = 0;
  let j = 0;
  while (j < t.length) {
    if (t[j] === s[i]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

console.log(isSubsequence("abca", "ahbgdc"));
