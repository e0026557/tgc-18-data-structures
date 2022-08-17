// A Node needs to have:
// 1. Data that it stores
// 2. A reference / pointer that points to the next node (default is null)
class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }

  // Functions / methods of the class
  setValue(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }

  // The 'next' argument is either a Node or null
  setNext(next) {
    this.next = next;
  }
}

module.exports = Node;