//https://leetcode.com/problems/moving-average-from-data-stream/editorial/

/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.queue = [];
  this.size = size;
  this.sum = Infinity;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  let removed = Infinity;
  if (this.queue.length + 1 > this.size) {
    removed = this.queue.shift();
  }
  this.queue.push(val);

  if (this.sum === Infinity) {
    this.sum = this.queue.reduce((a, b) => a + b);
  } else {
    this.sum -= removed === Infinity ? 0 : removed;
    this.sum +=val;
  }

  return this.sum / this.queue.length;
};

const movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // return 1.0 = 1 / 1
console.log(movingAverage.next(10)); // return 5.5 = (1 + 10) / 2
console.log(movingAverage.next(3)); // return 4.66667 = (1 + 10 + 3) / 3
console.log(movingAverage.next(5)); // return 6.0 = (10 + 3 + 5) / 3
