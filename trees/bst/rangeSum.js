//https://leetcode.com/problems/range-sum-of-bst/

const { TreeNode } = require("../TreeNode");

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (!root) return 0;

  let ans = 0;

  if (low <= root.val && root.val <= high) {
    ans += root.val;
  }

  if (low < root.val) {
    ans += rangeSumBST(root.left, low, high);
  }
  if (root.val < high) {
    ans += rangeSumBST(root.right, low, high);
  }

  return ans;
};

(function () {
  const input = [10, 5, 15, 3, 7, null, 18];
  const root = new TreeNode(input[0]);

  root.left = new TreeNode(input[1]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = new TreeNode(input[4]);

  root.right = new TreeNode(input[2]);
  root.right.right = new TreeNode(input[6]);

  console.log(rangeSumBST(root, 7, 15));
})();
