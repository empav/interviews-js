//https://leetcode.com/problems/path-sum/
const { TreeNode } = require("../TreeNode");

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const sum = (node, curr) => {
    if (!node) {
      return false;
    }

    if (!node.left && !node.right) {
      return curr + node.val === targetSum;
    }

    curr += node.val;
    let left = sum(node.left, curr);
    let right = sum(node.right, curr);
    return left || right;
  };

  return sum(root, 0);
};

var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum - root.val === 0;
  }

  targetSum -= root.val;
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
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
  console.log(hasPathSum(root, 22));
})();
