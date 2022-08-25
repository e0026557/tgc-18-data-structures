// No need to require Node since we are not creating a new Node instance

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
}


module.exports = Graph;