//https://leetcode.com/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let queue = [[root, 0]];

  const ans = [];
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [node, level] = queue.shift();
      if (!ans[level]) ans[level] = [];
      ans[level].push(node.val);
      if (node.left) queue.push([node.left, level + 1]);
      if (node.right) queue.push([node.right, level + 1]);
    }
  }

  return ans;
};

(function () {
  const input = [3, 9, 20, null, null, 15, 7];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = null;
  root.left.right = null;

  root.right.left = new TreeNode(input[5]);
  root.right.right = new TreeNode(input[6]);

  console.log(levelOrder(root));
})();
