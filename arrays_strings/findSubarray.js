/**
 * Find a contiguos subarray with length >=2 where its elements's sum is a multiple of k
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const findSubarray = (nums, k) => {
  if (nums.length < 2) return false;

  let left = 0,
    sum = nums[0] + nums[1];

  if (sum % k === 0) return true;

  for (let right = 2; right < nums.length; right++) {
    sum += nums[right];
    while (sum > k) {
      sum -= nums[left];
      left++;
    }
    if (sum % k === 0 && right - left >= 1) return true;
  }

  return false;
};

console.log(findSubarray([2, 5, 4, 6, 7], 3));
