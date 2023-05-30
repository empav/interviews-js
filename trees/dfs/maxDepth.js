//https://leetcode.com/problems/maximum-depth-of-binary-tree/

const { TreeNode } = require("../TreeNode");

/**
 * @param {TreeNode} root
 * @return {number}
 * Recursive first and then iterative implementation
 */
var maxDepth = function (node) {
  if (!node) {
    return 0;
  }

  let left = maxDepth(node.left);
  let right = maxDepth(node.right);
  return Math.max(left, right) + 1;
};

// Iterative implementation
// var maxDepth = function (root) {
//   if (!root) {
//     return 0;
//   }

//   let stack = [[root, 1]];
//   let ans = 0;

//   while (stack.length) {
//     let [node, depth] = stack.pop();
//     ans = Math.max(ans, depth);

//     if (node.left) {
//       stack.push([node.left, depth + 1]);
//     }
//     if (node.right) {
//       stack.push([node.right, depth + 1]);
//     }
//   }

//   return ans;
// };

(function () {
  const input = [3, 9, 20, null, null, 15, 7];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = input[3];
  root.left.right = input[4];
  root.right.left = new TreeNode(input[5]);
  root.right.right = new TreeNode(input[6]);
  console.log(maxDepth(root));
})();
