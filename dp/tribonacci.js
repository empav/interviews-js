//https://leetcode.com/problems/n-th-tribonacci-number/description/

/**
 * @param {number} n
 * @return {number}
 * The Tribonacci sequence Tn is defined as follows:
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 */
var tribonacci = function (n) {
  if (n===0) return 0;

  let first = 0;
  let second = 1;
  let third = 1;

  for (let i = 3; i <= n; i++) {
    let forth = third + second + first;
    first = second;
    second = third;
    third = forth;
  }

  return third;
};

console.log(tribonacci(25));
