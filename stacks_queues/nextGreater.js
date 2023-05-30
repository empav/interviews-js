//https://leetcode.com/problems/next-greater-element-i/editorial/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      map.set(stack.pop(), nums2[i]);
    }
    stack.push(nums2[i]);
  }

  while (stack.length) {
    map.set(stack.pop(), -1);
  }

  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans[i] = map.get(nums1[i]);
  }
  return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
