//https://leetcode.com/problems/simplify-path/editorial/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const result = [];
  const tokens = path.split("/");

  for (const token of tokens) {
    if (token === "." || token === "") {
      continue;
    } else if (token === "..") {
      if (stack.length) stack.pop();
    } else {
      stack.push(token);
    }
  }

  for (const s of stack) {
    result.push("/");
    result.push(s);
  }

  return result.length ? result.join("") : "/";
};

console.log(simplifyPath("/a/./b/../../c/"));
