function bubbleSort(array) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

const sortedArr = bubbleSort([12, 3, 56, 12, 67, 45, 1, 3, 4, 8, 2]);
console.log("sortedArr", sortedArr);
