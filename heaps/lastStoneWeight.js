//https://leetcode.com/problems/last-stone-weight/

const { MaxHeap } = require("./MaxHeap");

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = MaxHeap.heapify(stones);

  while (heap.size() > 1) {
    let first = heap.pop();
    let second = heap.pop();
    if (first !== second) heap.push(Math.abs(first - second));
  }
  return heap.top() || 0;
};

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1, 3]));
