//https://leetcode.com/problems/closest-binary-search-tree-value/description/

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
 * @return {number}
 */
var closestValue = function (root, target) {
  let val,
    closest = root.val;

  while (root) {
    val = root.val;
    const absVal = Math.abs(val - target);
    const absClosest = Math.abs(closest - target);
    const min = Math.min(val, closest);

    closest = absVal < absClosest ? val : absVal === absClosest ? min : closest;

    root = target < root.val ? root.left : root.right;
  }

  return closest;
};
