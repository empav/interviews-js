//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function minimumBribes(q) {
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log('Too chaotic');
      return;
    }
    // const max = Math.max(0, q[i] - 2);
    for (let j = 0; j <= i; j++) {
      if (q[j] > q[i]) {
        bribes += 1;
      }
    }
  }

  console.log(bribes);
}

minimumBribes([2, 1, 5, 3, 4]);
