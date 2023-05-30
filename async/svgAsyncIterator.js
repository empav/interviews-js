const fs = require("fs").promises;

const svgsAsync = {
  [Symbol.asyncIterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 30) {
          return fs
            .readFile(`svg/${i++}.svg`, "utf8")
            .then((svg) => Promise.resolve({ value: svg, done: false }))
            .catch((err) => Promise.reject(err));
        }
        return Promise.resolve({ done: true });
      },
    };
  },
};

(async () => {
  for await (let x of svgsAsync) {
    console.log(x);
  }
})();
