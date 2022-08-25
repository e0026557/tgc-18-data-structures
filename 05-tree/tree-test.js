const { BinaryTree, BinaryTreeNode } = require('./Tree');

const n1 = new BinaryTreeNode(25);
const n2 = new BinaryTreeNode(15);
const n3 = new BinaryTreeNode(7);
const n4 = new BinaryTreeNode(20);
const n5 = new BinaryTreeNode(91);
const n6 = new BinaryTreeNode(71);

n1.left = n2;
n2.left = n3;
n2.right = n4;
n1.right = n5;
n5.left = n6;

const tree = new BinaryTree(n1);

console.log(tree.find(100));
