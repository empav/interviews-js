function merge(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  while (left.length) sorted.push(left.shift());
  while (right.length) sorted.push(right.shift());

  return sorted;
}

function mergeSort(array) {
  if (array.length < 2) return array;
  else {
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

const sorted = mergeSort([3, 1, 67, 45, 23, 34, 89, 12, 15]);
console.log("sorted", sorted);
