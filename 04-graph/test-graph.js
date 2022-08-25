const Graph = require('./Graph');
const Node = require('./Node');

let g = new Graph();

// Define all the nodes
g.addNode(1, new Node(100));
g.addNode(2, new Node(200));
g.addNode(3, new Node(300));
g.addNode(4, new Node(400));
g.addNode(5, new Node(500));

// Define the edges
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(3, 4);
g.addEdge(4, 5);
