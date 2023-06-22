//https://leetcode.com/problems/deepest-leaves-sum/

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
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  if (!root) return 0;

  const maxDepthDFS = (root) => {
    if (!root) return 0;
    return Math.max(maxDepthDFS(root.left), maxDepthDFS(root.right)) + 1;
  };

  const sumDFS = (root, d) => {
    if (!root) return 0;
    if (d === depth - 1) return root.val;
    return sumDFS(root.left, d + 1) + sumDFS(root.right, d + 1);
  };

  const depth = maxDepthDFS(root);
  return sumDFS(root, 0);
};

(function () {
  const input = [1, 2, 3, 4, 5];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = new TreeNode(input[4]);

  // const input = [0, 1, 2, 3, 4, 15, 5, 6, 7, 10, 11, 12];
  // const root = new TreeNode(input[0]);
  // root.left = new TreeNode(input[1]);
  // root.right = new TreeNode(input[2]);
  // root.right.left = new TreeNode(input[11]);
  // root.left.left = input[3];
  // root.left.left.left = input[9];
  // root.left.right = input[4];
  // root.left.right.right = input[10];
  // root.right.right = new TreeNode(input[6]);
  // root.right.right.right = new TreeNode(input[7]);
  // root.right.right.right.left = new TreeNode(input[8]);

  console.log(deepestLeavesSum(root));
})();
