const Node = require('./Node');

// Graph does not have a starting point
let n1 = new Node(100);
let n2 = new Node(200);
let n3 = new Node(300);
let n4 = new Node(400);
let n5 = new Node(500);

// Usually edges are bidirectional
n1.addNeighbor(n2);
n2.addNeighbor(n1);

n2.addNeighbor(n3);
n3.addNeighbor(n2);

n4.addNeighbor(n2);
n2.addNeighbor(n4);

n5.addNeighbor(n4);
n4.addNeighbor(n5);

