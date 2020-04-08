/*
This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

 // Help and reference:
 // - https://www.dailycodingproblem.com/blog/unival-trees/
 // - https://crazycoderzz.wordpress.com/count-the-number-of-unival-subtrees-in-a-binary-tree/
*/
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

function countUnivalSubtrees(node) {
  // console.count("countUnivalSubtrees");
  if (node === undefined) { 
    return 0;
  }
  left = countUnivalSubtrees(node.left);
  right = countUnivalSubtrees(node.right);
  return left + right + Number(isUnival(node));
}

function isUnival(root) {
  return recurse(root, root.value);
}

function recurse(node, value) {
  if (node === undefined) {
    return true;
  }
  if (node.value === value) {
    return recurse(node.left, value) && recurse(node.right, value);
  }
  return false;
}

console.log(">", countUnivalSubtrees(tree));

module.exports = countUnivalSubtrees;
