const Node = require('./Node');
const LinkedList = require('./LinkedList');

// Create a test driver to test the linked list
let numberList = new LinkedList();
numberList.push(new Node(10));
numberList.push(new Node(11));
numberList.push(new Node(12));
numberList.push(new Node(13));
// numberList.print();

numberList.insertAt(1, new Node(-100));
numberList.print();

numberList.deleteAt(2);
numberList.print();