//https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/

const { TreeNode } = require('../../trees/TreeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const dfs = (node, parent) => {
    if (!node) return;

    node.parent = parent;
    dfs(node.left, node);
    dfs(node.right, node);
  };

  dfs(root, null);

  const seen = new Set([target]);
  let queue = [target];
  let distance = 0;

  while (queue.length && distance < k) {
    const size = queue.length;
    const newQueue = [];

    for (let i = 0; i < size; i++) {
      const node = queue[i];
      for (const neighbor of [node.left, node.right, node.parent]) {
        if (neighbor && !seen.has(neighbor)) {
          seen.add(neighbor);
          newQueue.push(neighbor);
        }
      }
    }

    distance++;
    queue = newQueue;
  }

  return queue.map((node) => node.val);
};

(function () {
  const input = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.right = new TreeNode(input[2]);
  root.left.left = new TreeNode(input[3]);
  root.left.right = new TreeNode(input[4]);
  root.right.left = new TreeNode(input[5]);
  root.right.right = new TreeNode(input[6]);
  root.left.right.left = new TreeNode(input[9]);
  root.left.right.right = new TreeNode(input[10]);

  console.log(distanceK(root, root.left, 2));
})();
