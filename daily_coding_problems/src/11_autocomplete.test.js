const autoComplete = require('./11_autocomplete')

test('should return ["deer", "deal"] when query is "de"', () => {
  const res = autoComplete('de', ['dog', 'deer', 'deal'])
  const expected = ['deer', 'deal']
  expect(res).toEqual(expected)
})

/**
 * Edge cases
 */
// To define
// test('should return [] when the set of strings is empty"', () => {
//   expect(autoComplete('de', [])).toBe([])
// })
