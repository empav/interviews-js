//https://leetcode.com/problems/boats-to-save-people/

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 * You are given an array people where people[i] is the weight of the ith person,
 * and an infinite number of boats where each boat can carry a maximum weight of limit.
 * Each boat carries at most two people at the same time, provided the sum of the weight
 * of those people is at most limit.
 * Return the minimum number of boats to carry every given person.
 */

var numRescueBoats = function (people, limit) {
  let ans = 0;
  let i = 0;
  let j = people.length - 1;
  people.sort((a, b) => a - b);

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++;
    }

    j -= 1;
    ans++;
  }

  return ans;
};

console.log(numRescueBoats([2, 4], 5));
