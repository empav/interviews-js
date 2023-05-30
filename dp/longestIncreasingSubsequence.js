//https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

var lengthOfLIS = function (nums) {
  const sub = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const currVal = nums[i];
    if (currVal > sub[sub.length - 1]) {
      sub.push(currVal);
    } else {
      const j = binarySearch(sub, currVal);
      sub[j] = currVal;
    }
  }
  return sub.length;
};

const binarySearch = (array, currVal) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[left] === currVal) return left;
    if (array[mid] < currVal) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
