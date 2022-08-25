class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(rootNode) {
    this.rootNode = rootNode;
  }

  // Assume find from root node
  find(targetValue) {
    return this.recursiveFind(this.rootNode, targetValue);
  }

  recursiveFind(rootNode, targetValue) {
    if (!rootNode) {
      return false; // not found
    }

    if (targetValue == rootNode.value) {
      return true;
    }

    if (targetValue < rootNode.value) {
      return this.recursiveFind(rootNode.left, targetValue);
    }
    else if (targetValue > rootNode.value) {
      return this.recursiveFind(rootNode.right, targetValue);
    }
  }
}

module.exports = {
  BinaryTree,
  BinaryTreeNode
};