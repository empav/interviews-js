function isInteger(x) {
  return typeof x === "number" && x % 1 === 0;
}

console.log(isInteger(5));
