const fs = require("fs");

const svgsSync = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next: () => {
        if (i <= 30) {
          const svg = fs.readFileSync(`svg/${i++}.svg`, "utf8");
          return { value: svg, done: false };
        }
        return { done: true };
      },
    };
  },
};

for (let svg of svgsSync) {
  console.log("svg", svg);
}
