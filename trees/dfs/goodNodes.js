//https://leetcode.com/problems/count-good-nodes-in-binary-tree/

const { TreeNode, printTree } = require("../TreeNode");

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
var goodNodes = function (root) {
  const compute = (node, max) => {
    if (!node) {
      return 0;
    }

    max = Math.max(max, node.val);

    let left = compute(node.left, max);
    let right = compute(node.right, max);

    let ans = left + right;
    if (node.val >= max) {
      ans++;
    }

    return ans;
  };

  return compute(root, -Infinity);
};

(function () {
  const input = [3, 1, 4, 3, null, 1, 5];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.right.left = new TreeNode(input[5]);
  root.right.right = new TreeNode(input[6]);
  console.log(goodNodes(root));
})();
