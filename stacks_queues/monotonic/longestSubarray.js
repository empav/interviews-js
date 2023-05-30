/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let increasing = [];
  let decreasing = [];
  let left = 0,
    ans = 0;

  for (let right = 0; right < nums.length; right++) {
    // maintain the monotonic deques
    while (
      increasing.length &&
      increasing[increasing.length - 1] > nums[right]
    ) {
      increasing.pop();
    }

    while (
      decreasing.length &&
      decreasing[decreasing.length - 1] < nums[right]
    ) {
      decreasing.pop();
    }

    increasing.push(nums[right]);
    decreasing.push(nums[right]);

    // maintain window property
    while (decreasing[0] - increasing[0] > limit) {
      if (nums[left] == decreasing[0]) {
        decreasing.shift();
      }
      if (nums[left] == increasing[0]) {
        increasing.shift();
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};

console.log(longestSubarray([8, 2, 4, 7], 4));
