function getPointer(el) {
  return el;
}

function dereferencePointer(el) {
  return el;
}

// Help https://www.wikiwand.com/en/XOR_linked_list
// Et aussi https://www.wikiwand.com/en/Unrolled_linked_list
class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.both = getPointer(next) ^ getPointer(prev);
  }
}

class List {
  constructor(head = null) {
    this.head = head;
  }

  add(element) {
    throw new Error("Not implemented");
  }

  get(index) {
    throw new Error("Not implemented");
  }
}

head = new Node("1", null, null);
list = new List(head);

console.log(list, head);
