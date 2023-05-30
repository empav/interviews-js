//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

const { TreeNode } = require("../TreeNode");
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;

  if (root.val === p || root.val === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  if (left) return left;

  return right;
};

(function () {
  const input = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.left.left.left = null;
  root.left.left.right = null;
  root.left.right = new TreeNode(input[4]);
  root.left.right.left = new TreeNode(input[input.length - 2]);
  root.left.right.right = new TreeNode(input[input.length - 1]);
  root.right.left = new TreeNode(input[5]);
  root.right.right = new TreeNode(input[6]);

  console.log("LCA: ", lowestCommonAncestor(root, 6, 8));
})();
