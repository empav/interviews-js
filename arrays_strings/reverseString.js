//https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4592/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }

  console.log(s);
};

reverseString("hello");
