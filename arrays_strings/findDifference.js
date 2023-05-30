//https://leetcode.com/problems/find-the-difference-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
  const res = [[], []];
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      if (!res[0].includes(nums1[i])) res[0].push(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i])) {
      if (!res[1].includes(nums2[i])) res[1].push(nums2[i]);
    }
  }
  return res;
};

const output = findDifference([1, 2, 3], [2, 4, 6]);
console.log("output", output[0], output[1]);
