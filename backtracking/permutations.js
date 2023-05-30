//https://leetcode.com/problems/permutations/

/**
 * @param {string} s
 * @return {string[]}
 */
var permuteString = function (s) {
  const bt = (curr) => {
    if (curr.length === string.length) {
      ans.push([...curr]);
      return;
    }
    for (const char of string) {
      if (!curr.includes(char)) {
        curr.push(char);
        bt(curr);
        curr.pop();
      }
    }
  };
  const string = [...s];
  const ans = [];
  bt([]);
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * With no duplicates
 */
var permute = function (nums) {
  const bt = (curr) => {
    if (curr.length === nums.length) {
      ans.push([...curr]);
      return;
    }
    for (const n of nums) {
      curr.push(n);
      bt(curr);
      curr.pop();
    }
  };

  const ans = [];
  bt([]);
  return ans;
};

var permuteNoDups = function (nums) {
  const bt = (curr) => {
    if (curr.length === nums.length) {
      ans.push([...curr]);
      return;
    }
    for (const n of nums) {
      if (!curr.includes(n)) {
        curr.push(n);
        bt(curr);
        curr.pop();
      }
    }
  };

  const ans = [];
  bt([]);
  return ans;
};

(function () {
  // for (const iter of permute([1, 2, 3])) {
  //   console.log(iter.join(""));
  // }
  for (const iter of permuteString("abc")) {
    console.log(iter.join(""));
  }
})();
