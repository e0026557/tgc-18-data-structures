const Node = require('./Node');

const n1 = new Node(42);
const n2 = new Node(43);
const n3 = new Node(44);

// Connect the nodes together 
n1.setNext(n2);
n2.setNext(n3);
n3.setNext(null);

console.log(n1.getValue());
console.log(n1.getNext().getValue());
console.log(n1.getNext().getNext().getValue());

// Printing the linked list (using list traversal)
const head = n1;
let current = head;
while (current != null) {
  console.log(current.getValue());
  current = current.getNext();
}

