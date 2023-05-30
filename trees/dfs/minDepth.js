//https://leetcode.com/problems/maximum-depth-of-binary-tree/

const { TreeNode } = require("../TreeNode");

/**
 * @param {TreeNode} root
 * @return {number}
 * Recursive first and then iterative implementation
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  let min_depth = Number.MAX_VALUE;
  if (root.left) min_depth = Math.min(minDepth(root.left), min_depth);
  if (root.right) min_depth = Math.min(minDepth(root.right), min_depth);

  return min_depth + 1;
};

(function () {
  const input = [1, 2, 3, 4, 5];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = new TreeNode(input[4]);
  console.log(minDepth(root));
})();
