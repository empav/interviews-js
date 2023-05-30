//https://leetcode.com/problems/ipo/

const { MaxHeap } = require("../heaps/MaxHeap");

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */

var findMaximizedCapital = function (k, w, profits, capital) {
  const projects = [];

  for (let i = 0; i < profits.length; i++) {
    projects.push([capital[i], profits[i]]);
  }

  projects.sort((a, b) => a[0] - b[0]);

  let maxHeap = new MaxHeap();
  let i = 0;
  for (let j = 1; j <= k; j++) {
    for (; i < projects.length && projects[i][0] <= w; i++) {
      maxHeap.push(projects[i][1]);
    }
    if (maxHeap.isEmpty()) return w;

    w += maxHeap.top();
  }

  return w;
};

console.log(findMaximizedCapital(10, 0, [1, 2, 3], [0, 1, 2]));
