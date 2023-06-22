const { TreeNode } = require('../TreeNode');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalOrder = (root) => {
  const queue = [[root, 0]];
  const map = new Map();

  while (queue.length) {
    const [node, offset] = queue.shift();

    if (map.has(offset)) {
      const arr = map.get(offset);
      arr.push(node.val);
      map.set(offset, arr);
    } else {
      map.set(offset, [node.val]);
    }

    if (node.left) queue.push([node.left, offset - 1]);
    if (node.right) queue.push([node.right, offset + 1]);
  }

  const sortedArr = Array.from(map).sort((a, b) => a[0] - b[0]);
  const ans = [];
  for (const [, v] of sortedArr) {
    ans.push(v);
  }

  return ans;
};

(function () {
  const input = [3, 9, 20, null, null, 15, 7];
  const root = new TreeNode(input[0]);
  root.left = new TreeNode(input[1]);
  root.left.left = input[3];
  root.left.right = input[4];

  root.right = new TreeNode(input[2]);
  root.right.left = new TreeNode(input[5]);
  root.right.right = new TreeNode(input[6]);

  console.log(...verticalOrder(root));
})();

//     3
//   /  \
//  9   20
//     /  \
//    15   7
