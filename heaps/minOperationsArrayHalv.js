//https://leetcode.com/problems/minimum-operations-to-halve-array-sum/

const { MaxHeap } = require("./MaxHeap");

/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
  let target = 0;
  const heap = new MaxHeap();

  for (const num of nums) {
    target += num;
    heap.push(num);
  }

  target /= 2;
  let ans = 0;
  while (target > 0) {
    ans++;
    let x = heap.pop();
    target -= x / 2;
    heap.push(x / 2);
  }

  return ans;
};

console.log(halveArray([5, 19, 8, 1]));
