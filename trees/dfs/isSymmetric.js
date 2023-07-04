//https://leetcode.com/problems/symmetric-tree/

const { TreeNode } = require('../TreeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const dfs = (left, right) => {
    if (
      (!left && right) ||
      (left && !right) ||
      (left && right && left.val !== right.val)
    )
      return false;

    if (left && right)
      return dfs(left.left, right.right) && dfs(left.right, right.left);

    return true;
  };

  if (!root) return true;

  return dfs(root.left, root.right);
};

(function () {
  const input = [1, 2, 2, 4, 5, 5, 4];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = new TreeNode(input[4]);
  root.right.left = new TreeNode(input[5]);
  root.right.right = new TreeNode(input[6]);

  console.log(isSymmetric(root));
})();
