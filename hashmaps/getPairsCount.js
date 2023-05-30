// javascript implementation of simple method to find count of
// pairs with given sum.

// Returns number of pairs in arr[0..n-1] with sum equal
// to 'sum'
const getPairsCount = (arr, k) => {
  const m = new Map();
  const n = arr.length;

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (m.has(k - arr[i])) {
      count += m.get(k - arr[i]);
    }
    if (m.has(arr[i])) {
      m.set(arr[i], m.get(arr[i]) + 1);
    } else {
      m.set(arr[i], 1);
    }
  }

  return count;
};

// Driver function to test the above function
console.log("Count of pairs is " + getPairsCount([1, 5, 7, -1, 5], 6));

// This code is contributed by umadevi9616
