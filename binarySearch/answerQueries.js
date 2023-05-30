/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const ps = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    ps[i] = nums[i] + ps[ps.length - 1];
  }

  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    ans[i] = binarySearch(ps, queries[i]);
  }
  return ans;
};

var binarySearch = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid + 1;
    else if (nums[mid] > target) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return nums[left] > target ? left : left + 1;
};

console.log(
  answerQueries(
    [736411, 184882, 914641, 37925, 214915],
    [331244, 273144, 118983, 118252, 305688, 718089, 665450]
  )
);
