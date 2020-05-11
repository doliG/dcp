const { car, cdr } = require("./05_callback_pairs");

function cons(a, b) {
  const pair = f => {
    return f(a, b);
  };
  return pair;
}

test("car(cons(3, 4)) should return 3", () => {
  expect(car(cons(3, 4))).toBe(3);
});

test("cdr(cons(3, 4)) should return 4", () => {
  expect(cdr(cons(3, 4))).toBe(4);
});
