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
*/

// Brut force, fair enough for frontend, can be better with tries
function autoComplete(query, list) {
  return list.filter(s => s.startsWith(query))
}

// console.log(autoComplete('de', ['dog', 'deer', 'deal']));

module.exports = autoComplete;