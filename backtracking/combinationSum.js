//https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const bt = (curr, start, sum) => {
    if (sum === target) {
      ans.push([...curr]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] <= target) {
        curr.push(candidates[i]);
        bt(curr, i, sum + candidates[i]);
        curr.pop();
      }
    }
  };

  const ans = [];
  bt([], 0, 0);
  return ans;
};

console.log(...combinationSum([2, 3, 6, 7], 7));
