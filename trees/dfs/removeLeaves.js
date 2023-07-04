//https://leetcode.com/problems/delete-leaves-with-a-given-value/

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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  const dfs = (root) => {
    if (!root) return false;
    if (dfs(root.left)) root.left = null;
    if (dfs(root.right)) root.right = null;
    return !root.left && !root.right && root.val == target;
  };

  return dfs(root) ? null : root;
};

(function () {
  const input = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = null;
  root.left.left.left = new TreeNode(input[7]);
  root.left.left.right = new TreeNode(input[8]);
  root.right.left = new TreeNode(input[5]);
  root.right.right = new TreeNode(input[6]);
  root.right.right.right = new TreeNode(input[input.length - 1]);
  console.log(removeLeafNodes(root, 22));
})();
