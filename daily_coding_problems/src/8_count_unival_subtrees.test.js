const countUnivalTree = require("./8_count_unival_subtrees");

xtest("It should return 5 on example tree", () => {
  //    0
  //   / \
  //  1   0
  //     / \
  //    1   0
  //   / \
  //  1   1
  const tree = {
    value: 0,
    left: { value: 1 },
    right: {
      value: 0,
      left: {
        value: 1,
        left: { value: 1 },
        right: { value: 1 },
      },
      right: { value: 0 },
    },
  };
  expect(countUnivalTree(tree)).toBe(5);
});
