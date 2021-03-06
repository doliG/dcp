/*
Implement an autocomplete system. That is, given a query string s and a set of
all possible query strings, return all strings in the set that have s as a
prefix.

For example, given the query string de and the set of strings
[dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to
speed up queries.

Resources:
- https://www.wikiwand.com/fr/Trie_(informatique)
- https://medium.com/@daetam/trie-autocomplete-8dd23ddd3846
- https://www.youtube.com/watch?v=-urNrIAQnNo
- https://www.wikiwand.com/en/Trie
*/

// Brut force, fair enough for frontend, can be better with tries
// function autoComplete(query, list) {
//   return list.filter(s => s.startsWith(query))
// }

// With trie, thanks wikipedia
class Node {
  constructor(value) {
    this.children = {}
    this.value = value
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(key) {
    let node = this.root;
    for (const char of key) {
      if (!(char in node.children)) {
        node.children[char] = new Node()
      }
      node = node.children[char]
    }
    node.value = key
  }

  findAll(prefix) {
    let node = this.root
    for (const char of prefix) {
      if (char in node.children) {
        node = node.children[char]
      } else {
        return undefined
      }
    }

    console.log(node.children)
    for (const child of node.children) console.log(child)
    return results
  }
}

function autoComplete(query, list) {
  const trie = new Trie()
  list.forEach(word => trie.insert(word))
  console.log(trie)
  return trie.findAll(query)
}

res = autoComplete('de', ['dog', 'deer', 'deal'])
console.log(res);

module.exports = autoComplete;