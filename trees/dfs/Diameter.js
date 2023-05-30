//https://leetcode.com/problems/diameter-of-binary-tree/description/

const { TreeNode } = require("../TreeNode");

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  const dfs = (node) => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);
    // update diameter at every node
    diameter = Math.max(diameter, left + right);
    // update the largest number of edge so far
    return 1 + Math.max(left, right);
  };
  let diameter = 0;
  dfs(root);
  return diameter;
};

(function () {
  const input = [1, 2, 3, 4, 5];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = new TreeNode(input[4]);

  console.log(diameterOfBinaryTree(root));
})();
