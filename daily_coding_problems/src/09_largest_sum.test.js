const largestSum = require('./9_largest_sum');

// Statement tests
test('Largest sum of [2, 4, 6, 2, 5] should be 13 (2 + 6 + 5)', () => {
  expect(largestSum([2, 4, 6, 2, 5])).toBe(13);
})

test('Largest sum of [5, 1, 1, 5] should be 10 (5 + 5)', () => {
  expect(largestSum([5, 1, 1, 5])).toBe(10);
})

// Default value test
test('Largest sum of [] should be 0', () => {
  expect(largestSum([])).toBe(0);
})

test('Largest sum of [10] should be 10', () => {
  expect(largestSum([10])).toBe(10);
})

// Negative test
test('Largest sum of [5, 1, -10, -5] should be 5 (5)', () => {
  expect(largestSum([5, 1, -10, -5])).toBe(5);
})

test('Largest sum of [-20, 1, 5, 10] should be 11 (10 + 1)', () => {
  expect(largestSum([-20, 1, 5, 10])).toBe(11);
})