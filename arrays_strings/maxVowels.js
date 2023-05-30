/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function (s, k) {
  const vowels = ["a", "e", "i", "o", "u"];

  let maxVowels = 0;
  let current = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) maxVowels++;
  }

  if (maxVowels === k) return maxVowels;

  current = maxVowels;

  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i])) current++;
    if (vowels.includes(s[i - k])) current--;

    if (current === k) return current;

    maxVowels = Math.max(maxVowels, current);
  }

  return maxVowels;
};

console.log(maxVowels("abciiidef", 3));
