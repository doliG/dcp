const assert = require("assert").strict;

// Args formats = { args: [list, k], expected: expected function return }
const tests = [
  { args: [[10, 15, 3, 7], 17], expected: true },
  { args: [[10, 15, 3, 7], 18], expected: true },
  { args: [[10, 15, 3, 7], 1], expected: false },
  { args: [[], 10], expected: false }
];

// for (test of tests) {
//   assert.deepEqual(resolveDumb(...test.args), test.expected);
//   assert.deepEqual(resolveReadable(...test.args), test.expected);
//   assert.deepEqual(resolveSmart(...test.args), test.expected);
// }

function resolveDumb(list, k) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === k) {
        return true;
      }
    }
  }
  return false;
}

function resolveReadable(list, k) {
  for (const elem of list) {
    if (list.find(n => n + elem === k)) {
      return true;
    }
  }
  return false;
}

function resolveSmart(list, k) {
  const completion = new Set();

  for (const elem of list) {
    if (completion.has(elem)) {
      return true;
    }
    completion.add(k - elem);
  }
  return false;
}

module.exports = { resolveDumb, resolveReadable, resolveSmart };
