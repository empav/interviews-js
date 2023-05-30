//https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const bt = (curr) => {
    if (curr.length === digits.length) {
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
  bt([]);
  return ans;
};

(function () {
  for (const lc of letterCombinations("23")) {
    console.log(lc.join(""));
  }
})();
