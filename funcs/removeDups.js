function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function removeDuplicates(arr) {
  let unique = [];
  arr.forEach(element => {
      if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
}

function removeDuplicates(arr) {
  let unique = arr.reduce(function (acc, curr) {
      if (!acc.includes(curr))
          acc.push(curr);
      return acc;
  }, []);
  return unique;
}

function removeDuplicates(arr) {
  let unique = [];
  for (i = 0; i < arr.length; i++) {
      if (unique.indexOf(arr[i]) === -1) {
          unique.push(arr[i]);
      }
  }
  return unique;
}
