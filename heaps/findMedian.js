//https://leetcode.com/problems/find-median-from-data-stream/

const { MaxHeap } = require("./MaxHeap");
const { MinHeap } = require("./MinHeap");

var MedianFinder = function () {
  this.maxHeap = new MaxHeap();
  this.minHeap = new MinHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.maxHeap.push(num);
  this.minHeap.push(this.maxHeap.pop());
  if (this.minHeap.size() > this.maxHeap.size()) {
    this.maxHeap.push(this.minHeap.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size() > this.minHeap.size()) {
    return this.maxHeap.top();
  }

  return (this.minHeap.top() + this.maxHeap.top()) / 2.0;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
const medianFinder = new MedianFinder();
medianFinder.addNum(1); // arr = [1]
medianFinder.addNum(2); // arr = [1, 2]
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3); // arr[1, 2, 3]
console.log(medianFinder.findMedian()); // return 2.0
