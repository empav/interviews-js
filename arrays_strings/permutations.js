/**
 * @param {string} s
 * @return {string[]}
 */
const findPermutations = (s) => {
  if (s.length < 2) {
    return s;
  }

  const perms = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (s.indexOf(char) !== i) continue;

    let leftovers = s.slice(0, i) + s.slice(i + 1, s.length);
    for (let perm of findPermutations(leftovers)) {
      perms.push(char + perm);
    }
  }
  return perms;
};

console.log(findPermutations("1234"));
