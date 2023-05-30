/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const map = {};

  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i;
  }

  return [...s]
    .sort((a, b) => {
      if (map[a] && map[b]) {
        return map[a] - map[b];
      } else if (map[a]) return +1;
      else if (map[b]) return -1;
      else return 0;
    })
    .join("");
};

console.log(customSortString("kqep", "pekeq"));
