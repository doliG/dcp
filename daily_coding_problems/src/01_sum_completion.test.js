const {
  resolveDumb,
  resolveReadable,
  resolveSmart
} = require("./01_sum_completion");

test("resolveDumb([10, 15, 3, 7], 17) should return true", () => {
  expect(resolveDumb([10, 15, 3, 7], 17)).toBe(true);
});
test("resolveDumb([10, 15, 3, 7], 18) should return true", () => {
  expect(resolveDumb([10, 15, 3, 7], 18)).toBe(true);
});
test("resolveDumb([10, 15, 3, 7], 1) should return false", () => {
  expect(resolveDumb([10, 15, 3, 7], 1)).toBe(false);
});

test("resolveReadable([10, 15, 3, 7], 17) should return true", () => {
  expect(resolveReadable([10, 15, 3, 7], 17)).toBe(true);
});
test("resolveReadable([10, 15, 3, 7], 18) should return true", () => {
  expect(resolveReadable([10, 15, 3, 7], 18)).toBe(true);
});
test("resolveReadable([10, 15, 3, 7], 1) should return false", () => {
  expect(resolveReadable([10, 15, 3, 7], 1)).toBe(false);
});

test("resolveSmart([10, 15, 3, 7], 17) should return true", () => {
  expect(resolveSmart([10, 15, 3, 7], 17)).toBe(true);
});
test("resolveSmart([10, 15, 3, 7], 18) should return true", () => {
  expect(resolveSmart([10, 15, 3, 7], 18)).toBe(true);
});
test("resolveSmart([10, 15, 3, 7], 1) should return false", () => {
  expect(resolveSmart([10, 15, 3, 7], 1)).toBe(false);
});
