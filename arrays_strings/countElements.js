//https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/705/hashing/4661/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  const set = new Set(arr);

  let count = 0;
  for (const elem of arr) {
    if (set.has(elem + 1)) {
      count++;
    }
  }
  return count;
};

console.log(countElements([1, 2, 3]));
