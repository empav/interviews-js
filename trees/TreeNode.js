function TreeNode(val = 0, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function printTree(root) {
  if (!root) return;
  console.log(root.val);
  printTree(root.left);
  printTree(root.right);
}

exports.TreeNode = TreeNode;
exports.printTree = printTree;
