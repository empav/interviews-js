function sum(x, y) {
  if (y) {
    return x + y;
  } else {
    return function(y) {
      return x + y;
    };
  }
}

// Outputs 5
console.log(sum(2, 3));
console.log(sum(2)(3));
