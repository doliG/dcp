"""
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.
Given the root to a binary tree, implement serialize(root), which serializes
the tree into a string, and deserialize(s), which deserializes the string back
into the tree.

For example, given the following Node class:
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

The following test should pass:
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'

"""

NULL_MARKER="∅"

class Node:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

def serialize(root):
  if (type(root) is not Node):
    raise TypeError(f"Root must be of Node instance, but is {type(root)}")
  left = serialize(root.left) if root.left else NULL_MARKER
  right = serialize(root.right) if root.right else NULL_MARKER
  return f"{root.val} {left} {right}"

def deserialize(s):
  elem = s.split()
  def recurse(s):
    node = Node(s.pop(0))
    if (node.val == NULL_MARKER):
      return None
    node.left = recurse(s);
    node.right = recurse(s);
    return node
  return recurse(elem)

# My tests
root = Node('root', Node('left', Node('left.left')), Node('right'))
serialized = serialize(root)
print(serialized)
bis = deserialize(serialized)
print(serialize(bis))

# Google test
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'

# Resources
# Help https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/
# https://www.youtube.com/watch?v=YGZuDSs8fQo
