//https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
  if (!(3 <= salary.length <= 100)) {
    throw RangeError("3 <= salary.length <= 100");
  }

  let min = salary[0];
  let max = salary[0];
  let total = 0;

  for (const num of salary) {
    if (!((1000 <= num <= 10) ^ 6)) {
      throw RangeError("1000 <= salary[i] <= 10^6");
    }
    if (num < min) min = num;
    if (num > max) max = num;
    total += num;
  }

  return (total - min - max) / (salary.length - 2);
};

console.log(average([4000, 3000, 1000, 2000]));
