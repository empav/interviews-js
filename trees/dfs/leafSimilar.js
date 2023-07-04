//https://leetcode.com/problems/leaf-similar-trees/

const { TreeNode } = require('../TreeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const dfs = (node, arr) => {
    if (!node) return;

    dfs(node.left, arr);
    dfs(node.right, arr);
    if (!node.left && !node.right) arr.push(node.val);
  };

  const root1Arr = [];
  const root2Arr = [];
  dfs(root1, root1Arr);
  dfs(root2, root2Arr);

  return (
    root1Arr.length === root2Arr.length &&
    root1Arr.every((v, i) => v === root2Arr[i])
  );
};

(function () {
  const input1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 14];
  const root1 = new TreeNode(input1[0]);
  root1.left = new TreeNode(input1[1]);
  root1.right = new TreeNode(input1[2]);
  root1.left.left = new TreeNode(input1[3]);
  root1.left.right = new TreeNode(input1[4]);
  root1.right.left = new TreeNode(input1[5]);
  root1.right.right = new TreeNode(input1[6]);
  root1.right.left.left = null;
  root1.right.left.right = null;
  root1.right.right.left = new TreeNode(input1[9]);
  root1.right.right.right = new TreeNode(input1[10]);

  const input2 = [
    3,
    5,
    1,
    6,
    71,
    4,
    2,
    null,
    null,
    null,
    null,
    null,
    null,
    9,
    8,
  ];
  const root2 = new TreeNode(input2[0]);
  root2.left = new TreeNode(input2[1]);
  root2.right = new TreeNode(input2[2]);
  root2.left.left = new TreeNode(input2[3]);
  root2.left.right = new TreeNode(input2[4]);
  root2.right.left = new TreeNode(input2[5]);
  root2.right.right = new TreeNode(input2[6]);

  root2.left.left.left = null;
  root2.left.left.right = null;

  root2.left.right.left = null;
  root2.left.right.right = null;

  root2.right.left.left = null;
  root2.right.left.right = null;

  root2.right.right.left = new TreeNode(input2[13]);
  root2.right.right.right = new TreeNode(input2[14]);

  console.log(leafSimilar(root1, root2));
})();
