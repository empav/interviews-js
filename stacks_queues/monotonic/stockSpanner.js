var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let ans = 1;

  while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
    ans += this.stack.pop()[1];
  }
  this.stack.push([price, ans]);
  return ans;
};

const stockSpanner = new StockSpanner();
let val = stockSpanner.next(100); // return 1
console.log("val", val);
val = stockSpanner.next(80); // return 1
console.log("val", val);
val = stockSpanner.next(60); // return 1
console.log("val", val);
val = stockSpanner.next(70); // return 2
console.log("val", val);
val = stockSpanner.next(60); // return 1
console.log("val", val);
val = stockSpanner.next(75); // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
console.log("val", val);
val = stockSpanner.next(85); // return 6
console.log("val", val);
