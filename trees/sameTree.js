//https://leetcode.com/problems/same-tree/

const { TreeNode } = require('./TreeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (p === null || q === null || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

(function () {
  const input = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 14];
  const root1 = new TreeNode(input[0]);
  root1.left = new TreeNode(input[1]);
  root1.right = new TreeNode(input[2]);
  root1.left.left = new TreeNode(input[3]);
  root1.left.right = new TreeNode(input[4]);
  root1.right.left = new TreeNode(input[5]);
  root1.right.right = new TreeNode(input[6]);
  root1.right.left.left = null;
  root1.right.left.right = null;
  root1.right.right.left = new TreeNode(input[9]);
  root1.right.right.right = new TreeNode(input[10]);

  const root2 = new TreeNode(input[0]);
  root2.left = new TreeNode(input[1]);
  root2.right = new TreeNode(input[2]);
  root2.left.left = new TreeNode(input[3]);
  root2.left.right = new TreeNode(input[4]);
  root2.right.left = new TreeNode(input[5]);
  root2.right.right = new TreeNode(input[6]);
  root2.right.left.left = null;
  root2.right.left.right = null;
  root2.right.right.left = new TreeNode(input[9]);
  root2.right.right.right = new TreeNode(input[10]);

  console.log(isSameTree(root1, root2));
})();
