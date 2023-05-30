//https://leetcode.com/problems/maximum-69-number/editorial/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const digits = [...String(num)];

  if (!digits.includes("6")) return num;

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "6") {
      digits[i] = "9";
      break;
    }
  }
  return parseInt(digits.join(""));
};

console.log(maximum69Number(9669));
