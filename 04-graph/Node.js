class Node {
  // Assume that neighbors is an array of Nodes
  constructor(value, neighbors = []) {
    this.value = value;
    this.neighbors = neighbors; // can have multiple neighbors
  }

  addNeighbor(node, label = '') {
    this.neighbors.push(node, label)
  }

  getNeighbors() {
    return this.neighbors;
  }
}

module.exports = Node;