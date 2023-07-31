function solution(A) {
  if (!A.includes(1)) return 1;

  const expected = (A.length * (A.length + 1)) / 2;

  const unique = [];
  let sum = 0;
  A.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
      sum += element;
    }
  });

  return expected - sum === 0 ? A.length + 1 : expected - sum;
}

console.log(solution([1, 3, 6, 4, 2, 2]));

console.log(solution([-1, -3]));

console.log(solution([1, 2, 3]));
