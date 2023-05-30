/**
 * @param {number} n
 * @return {number}
 */
var fibonacci = function (n) {
  if (n === 1) return [1];

  const sequence = [1,1];

  let first = sequence[0];
  let second = sequence[1];
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    sequence.push(third);
    first = second;
    second = third;
  }

  return sequence;
};

console.log(fibonacci(25));
