//https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const matching = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of s) {
    if (matching[char]) {
      stack.push(char);
    } else {
      if (!stack.length) return false;

      const pre = stack.pop();
      if (matching[pre] !== char) return false;
    }
  }

  return !stack.length;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
