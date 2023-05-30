/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s
    .split(" ")
    .map((word) => [...word].reverse().join(""))
    .join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
