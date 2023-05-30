//https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/editorial/

const { TreeNode } = require("../TreeNode");
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  const helper = (node, curMax, curMin) => {
    // if encounter leaves, return the max-min along the path
    if (!node) {
      return curMax - curMin;
    }
    // else, update max and min
    // and return the max of left and right subtrees
    curMax = Math.max(curMax, node.val);
    curMin = Math.min(curMin, node.val);
    return Math.max(
      helper(node.left, curMax, curMin),
      helper(node.right, curMax, curMin)
    );
  };
  if (!root) {
    return 0;
  }
  return helper(root, root.val, root.val);
};

(function () {
  const input = [8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.right.right = new TreeNode(input[6]);
  root.right.right.left = new TreeNode(input[input.length - 1]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = new TreeNode(input[4]);
  root.left.right.left = new TreeNode(input[9]);
  root.left.right.right = new TreeNode(input[input.length - 2]);

  console.log(maxAncestorDiff(root));
})();
