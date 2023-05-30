/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const cities = new Set(paths.flat());

  for (const [from] of paths) {
    cities.delete(from);
  }

  return [...cities].join('');
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
