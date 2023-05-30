function factorial(n) {
  if (n === 1) return 1;

  let factorial = 1;
  while (n >= 2) {
    factorial *= n--;
  }
  return factorial;
}

console.log(factorial(5));
