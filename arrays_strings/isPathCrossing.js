/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const set = new Set();
  let curr = [0, 0];
  set.add(curr.join(","));

  for (const p of path) {
    switch (p) {
      case "N": {
        curr[1]++;
        break;
      }
      case "E": {
        curr[0]++;
        break;
      }
      case "S": {
        curr[1]--;
        break;
      }
      case "W": {
        curr[0]--;
        break;
      }
      default:
        throw new RangeError("Unknown path");
    }
    const newCoordinates = curr.join(",");
    if (set.has(newCoordinates)) return true;
    set.add(curr.join(","));
  }

  return false;
};

console.log(isPathCrossing("NESWW"));
