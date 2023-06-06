//https://leetcode.com/problems/maximum-units-on-a-truck/description/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let ans = 0;
  for (const bt of boxTypes) {
    const nBoxes = bt[0];
    const uBox = bt[1];
    if (nBoxes >= truckSize) {
      return ans + truckSize * uBox;
    } else {
      truckSize -= nBoxes;
      ans += nBoxes * uBox;
    }
  }

  return ans;
};

console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);
