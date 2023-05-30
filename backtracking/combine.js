//https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const bt = (curr, i) => {
    if (curr.length === k) {
      ans.push([...curr]);
      return;
    }

    for (let num = i; num <= n; num++) {
      curr.push(num);
      bt(curr, num + 1);
      curr.pop();
    }
  };

  const ans = [];
  bt([], 1);
  return ans;
};

(function () {
  for (const i of combine(4, 2)) {
    console.log(i.join(""));
  }
})();
