//https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4501/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var combine = function (arr1, arr2) {
  let i = 0,
    j = 0,
    result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr2[j], arr2[j]);
    }
  }

  if (i < arr1.length) {
    result.push(...arr1.slice(i));
  }

  if (j < arr2.length) {
    result.push(...arr2.slice(j));
  }

  return result;
};

console.log(combine([1, 4, 7, 20], [3, 5, 6]));
