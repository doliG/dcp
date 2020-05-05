/*
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of
non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5.
[5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

Help and reference:
- https://www.youtube.com/watch?v=6w60Zi1NtL8
- https://www.youtube.com/watch?v=UtGtF6nc35g
*/

function largestSum(list) {
  if (list.length === 0)
    return 0

  let incl = list[0] // Max sum _including_ the previous element
  let excl = 0       // Maximum sum _excluding_ the previous element

  for (let i = 1; i < list.length; i++) {
    const oldIncl = incl;
    incl = excl + list[i]
    excl = Math.max(oldIncl, excl)
  }

  return Math.max(incl, excl)
}

module.exports = largestSum;