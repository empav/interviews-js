//https://leetcode.com/problems/sign-of-the-product-of-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */

const signFunc = function (x) {
  if (x > 0) return 1;
  if (x === 0) return 0;
  if (x < 0) return -1;
};

const arraySign = function (nums) {
  const product = nums.reduce((acc, curr) => {
    return acc * curr;
  }, 1);

  return signFunc(product);
};

console.log(arraySign([1, 3, 5]));
