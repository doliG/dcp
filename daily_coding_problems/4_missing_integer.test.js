const firstMissingInt = require("./4_missing_integer");

test("first missing integer in [1, 2, 0] is 3", () => {
  expect(firstMissingInt([1, 2, 0])).toBe(3);
});

test("first missing integer in [3, 4, -1, 1] is 2", () => {
  expect(firstMissingInt([3, 4, -1, 1])).toBe(2);
});
