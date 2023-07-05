//https://leetcode.com/problems/search-in-a-binary-search-tree/

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;

  if (val < root.val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
};

(function () {
  const input = [4, 2, 7, 1, 3];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = new TreeNode(input[4]);

  console.log(searchBST(root, 2));
})();
