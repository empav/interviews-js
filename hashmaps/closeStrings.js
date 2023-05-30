/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
  }

  return (
    [...map1.keys()].sort().join("") === [...map2.keys()].sort().join("") &&
    [...map1.values()].sort().join("") === [...map2.values()].sort().join("")
  );
};

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const N = word1.length;
  const M = 26;
  let c1 = new Uint16Array(M);
  let c2 = new Uint16Array(M);
  for (let i = 0; i < N; i++) c1[word1.charCodeAt(i) - 97]++;
  for (let i = 0; i < N; i++) c2[word2.charCodeAt(i) - 97]++;
  for (let i = 0; i < M; i++)
    if (c1[i] !== c2[i] && (c1[i] === 0 || c2[i] === 0)) return false;
  c1.sort();
  c2.sort();
  for (let i = 0; i < M; i++) if (c1[i] !== c2[i]) return false;
  return true;
};

console.log(closeStrings("uau", "ssx"));
