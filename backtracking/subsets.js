/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const bt = (curr, i) => {
    if (i > nums.length) {
      return;
    }
    ans.push([...curr]);
    for (let j = i; j < nums.length; j++) {
      curr.push(nums[j]);
      bt(curr, j + 1);
      curr.pop();
    }
  };
  const ans = [];
  bt([], 0);
  return ans;
};

(function () {
  for (const iter of subsets([1, 2, 3])) {
    console.log(iter.join(""));
  }
})();
