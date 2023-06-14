//https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/

/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function (n, target) {
  const digitsSum = (n) => {
    let sum = 0;
    while (n) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  };

  let i = n,
    base = 1;
  while (digitsSum(n) > target) {
    n = Math.floor(n / 10) + 1;
    base *= 10;
  }

  return base * n - i;
};

console.log(makeIntegerBeautiful(6068060761, 3));
