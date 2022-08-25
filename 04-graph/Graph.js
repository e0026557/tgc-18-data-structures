// No need to require Node since we are not creating a new Node instance
const Queue = require('./data_structures/Queue');
const Stack = require('./data_structures/Stack');

class Graph {
  constructor() {
    // Use an object to store the nodes
    // create a lookup table using the id of the node
    this.nodes = {};
  }
  // 2 args
  // 1. the id (unique) of the node
  // 2. the node itself
  addNode(id, node) {
    this.nodes[id] = node;
  }

  addEdge(startNodeId, endNodeId) {
    const startNode = this.nodes[startNodeId];
    const endNode = this.nodes[endNodeId];

    // Check that the nodes are not already connected
    if (startNode.getNeighbors().map(n => n.node).includes(endNode)) {
      return;
    }

    if (endNode.getNeighbors().map(n => n.node).includes(startNode)) {
      return;
    }

    if (startNode && endNode) {
      startNode.addNeighbor(endNode);
      endNode.addNeighbor(startNode);
    }
  }

  // Breadth first search
  bfs(startNodeId) {
    const startNode = this.nodes[startNodeId];

    const visited = []; // Store all visited nodes (to ensure no backtracking)
    const queue = new Queue();
    queue.enqueue(startNode);

    // While queue is not empty
    while (queue.peek()) {
      const front = queue.dequeue();
      // If not visited before
      if (visited.includes(front) == false) {
        console.log('visiting node => ', front.value);

        // Get neighbors and enqueue them
        const neighborNodes = front.getNeighbors().map(n => n.node);
        for (let n of neighborNodes) {
          queue.enqueue(n);
        }

        // Mark node as visited
        visited.push(front);
      }
    }
  }

  // Depth first search
  dfs(startNodeId) {
    const startNode = this.nodes[startNodeId];

    const visited = []; // Store all visited nodes (to ensure no backtracking)
    const stack = new Stack();
    stack.push(startNode);

    // While stack is not empty
    while (stack.peek()) {
      const front = stack.pop();
      // If not visited before
      if (visited.includes(front) == false) {
        console.log('visiting node => ', front.value);

        // Get neighbors and enqueue them
        const neighborNodes = front.getNeighbors().map(n => n.node);
        for (let n of neighborNodes) {
          stack.push(n);
        }

        // Mark node as visited
        visited.push(front);
      }
    }
  }
}


module.exports = Graph;