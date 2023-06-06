//https://leetcode.com/problems/assign-cookies/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let children = 0;
  for (let num of s) {
    if (num >= g[children]) children++;
  }
  return children;
};

console.log(findContentChildren([1, 2, 3], [1, 1]));
