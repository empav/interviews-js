const obj = {
  a: 1,
  b: 2,
};

Object.defineProperty(obj, "b", {
  get: function () {
    return this.a * 5;
  },
});

console.log(obj.b);
