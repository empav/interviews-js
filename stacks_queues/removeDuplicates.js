//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [];

  for (const char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop();
    } else stack.push(char);
  }

  return stack.join("");
};

console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));
