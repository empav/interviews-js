//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];

  const queue = [root];
  const ans = [];
  let level = 0;

  while (queue.length) {
    let size = queue.length,
      arrLevel = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      arrLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    ans.push(level % 2 === 1 ? arrLevel.reverse() : arrLevel);
    level++;
  }
  return ans;
};

var zigzagLevelOrder = function (root) {
  const order = [];

  const dfs = (root, lvl) => {
    if (!root) return;
    if (!order[lvl]) {
      order[lvl] = [];
    }
    if (lvl % 2 !== 0) {
      order[lvl].unshift(root.val);
    } else {
      order[lvl].push(root.val);
    }
    lvl++;
    dfs(root.left, lvl);
    dfs(root.right, lvl);
  };

  dfs(root, 0);

  return order;
};

(function () {
  const input = [1, 2, 3, 4, null, null, 5];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = input[4];

  root.right = new TreeNode(input[2]);
  root.right.left = input[5];
  root.right.right = new TreeNode(input[6]);

  console.log(...zigzagLevelOrder(root));
})();
