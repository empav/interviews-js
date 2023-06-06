//https://leetcode.com/problems/boats-to-save-people/

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);

  let boats = 0,
    left = 0,
    right = people.length - 1;

  while (left <= right) {
    if (people[right] + people[left] <= limit) {
      left++;
    }
    right--;
    boats++;
  }

  return boats;
};

console.log(numRescueBoats([3, 2, 2, 1], 3));
