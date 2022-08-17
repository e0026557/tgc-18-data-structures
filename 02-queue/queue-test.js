const Queue = require('./Queue');

const queue = new Queue();
queue.enqueue('John');
queue.enqueue('Mary');
queue.enqueue('Sally');
queue.enqueue('Joe');

function printQueue(q) {
  let q2 = new Queue();
  // Queue traversal
  while (q.peek()) {
    let front = q.dequeue();
    q2.enqueue(front);
    console.log(front);
  }

  q = q2; // reassign queue to the newQueue
}

printQueue(queue);