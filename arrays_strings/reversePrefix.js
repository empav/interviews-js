/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function (word, ch) {
  const arr = [...word];

  let i = 0,
    j = arr.indexOf(ch, 0);

  while (i < arr.length) {
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
      continue;
    }
    i++;
  }

  return arr.join("");
};

console.log(reversePrefix("abcdefd", "d"));
