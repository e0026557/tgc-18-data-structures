const Node = require('./Node');
const LinkedList = require('./LinkedList');

// Queue methods
// 1. Add to back (enqueue)
// 2. Remove from front (dequeue)
// 3. See the front (peek)

class Queue {
  // Composition
  // -> When a class contains another class
  constructor() {
    this.data = new LinkedList();
  }

  // Assume new data is a value (int, float etc)
  // -> Add new node to the back of linked list
  enqueue(data) {
    this.data.push(new Node(data));
  }

  dequeue() {
    // Retrieve the first node of linked list
    const front = this.data.getAt(0);

    // Delete the first node of the linked list
    this.data.deleteAt(0);
    return front.getValue(); // Try to hide the inner workings of the queue
  }

  peek() {
    //   const front = this.data.getAt(0);
    //   if (front) {
    //     return front.getValue();
    //   }
    //   else {
    //     return null;
    //   }
    // }

    // optional chaining ('?') only for Javascript
    return this.data.getAt(0)?.getValue(); 
  }
}

module.exports = Queue;