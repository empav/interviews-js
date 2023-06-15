//https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const bt = (curr, idx = 0) => {
    if (curr.length === digits.length) {
      ans.push(curr.join(''));
      return;
    }

    const charStr = letters[+digits[idx]];

    for (let i = 0; i < charStr.length; i++) {
      curr.push(charStr[i]);
      bt(curr, idx + 1);
      curr.pop();
    }
  };

  if (!digits) return [];
  const letters = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  const ans = [];
  bt([], 0);
  return ans;
};

(function () {
  console.log(letterCombinations('23'));
})();
