//https://leetcode.com/problems/make-the-string-great/editorial/

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  if (s <= 1) return s;

  const stack = [];

  for (let char of s) {
    if (!stack.length) {
      stack.push(char);
    } else {
      if (Math.abs(stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)) === 32) {
        stack.pop();
      } else stack.push(s[i]);
    }
  }

  return stack.join("");
};

console.log(makeGood("leEeetcode"));
console.log(makeGood("abBAcC"));
console.log(makeGood("s"));
