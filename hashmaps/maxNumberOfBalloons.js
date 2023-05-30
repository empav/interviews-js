/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const map = new Map();
  const arr = [..."balloon"];

  for (const char of text) {
    if (arr.includes(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }

  if (map.size !== 5) return 0;

  let min = Math.min(map.get("b"), map.get("a"), map.get("n"));

  for (; min >= 1; min--) {
    if (map.get("l") >= min * 2 && map.get("o") >= min * 2) return min;
  }

  return 0;
};

console.log(maxNumberOfBalloons("nlaebolko"));

[1, 1, 2, 2, 1][(2, 2, 4, 4, 2)][(3, 3, 6, 6, 3)];
