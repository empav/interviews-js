//https://leetcode.com/problems/keys-and-rooms/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const dfs = (node) => {
    for (const neighbor of rooms[node]) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        dfs(neighbor);
      }
    }
  };

  const seen = new Set([0]);
  dfs(0);

  return seen.size === rooms.length;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
