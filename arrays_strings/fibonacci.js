function* fibonacci(n) {
  let pre = 0;
  let fib = 1;
  while (n-- > 0) {
    [pre, fib] = [fib, pre + fib];
    yield fib;
  }
}

console.log(...fibonacci(5));
