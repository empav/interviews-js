const { TreeNode } = require("../TreeNode");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minVal = function (root) {
  let dfs = (node, min) => {
    if (!node) {
      return Infinity;
    }
    if (!node.left && !node.right) {
      return Math.min(min, node.val);
    }

    let left = dfs(node.left, Math.min(min, node.val));
    let right = dfs(node.right, Math.min(min, node.val));

    return Math.min(left, right);
  };

  return dfs(root, Infinity);
};

(function () {
  const input = [45, 9, 4, -100, -885, -94, -102];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = new TreeNode(input[4]);
  root.right.left = new TreeNode(input[5]);
  root.right.right = new TreeNode(input[6]);

  console.log(minVal(root));
})();
