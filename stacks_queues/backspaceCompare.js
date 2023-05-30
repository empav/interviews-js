//https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const computeString = (string) => {
    const stack = [];
    for (const char of string) {
      if (char === "#") {
        stack.pop();
      } else stack.push(char);
    }
    return stack.join("");
  };

  return computeString(s) === computeString(t);
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));
