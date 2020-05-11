const solve = require("./07_decode_message");

test("resolve('111') should return 3", () => {
  expect(solve("111")).toBe(3);
});

test("resolve('123') should return 3", () => {
  expect(solve("123")).toBe(3);
});
