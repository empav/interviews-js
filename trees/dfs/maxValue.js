const { TreeNode } = require("../TreeNode");

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxVal = function (root) {
  let dfs = (node) => {
    if (!node) {
      return 0;
    }

    max = Math.max(max, node.val);

    let left = dfs(node.left);
    let right = dfs(node.right);

    return Math.max(left, right);
  };
  let max = -Infinity;
  dfs(root);
  return max;
};

(function () {
  const input = [45, 9, 4, 1, 885, 940, 102];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = new TreeNode(input[4]);
  root.right.left = new TreeNode(input[5]);
  root.right.right = new TreeNode(input[6]);

  console.log(maxVal(root));
})();
