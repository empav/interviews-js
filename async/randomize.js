const randoms = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        const value = Math.floor(Math.random() * 100);
        if (this.i++ < 10) {
          return Promise.resolve({ value, done: false });
        } else {
          return Promise.resolve({ done: true });
        }
      }
    };
  }
};

const asyncIterator = randoms[Symbol.asyncIterator]();

console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());
console.log(asyncIterator.next());

// (async function() {
//   // for await (let x of randoms) {
//   // }
// })();
