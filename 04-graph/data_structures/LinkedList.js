const Node = require('./Node');

class LinkedList {
  constructor() {
    // If the head is null, it means the linked list is empty
    this.head = null;
    this.tail = null;
  }

  push(node) {
    // If the linked list is empty (head is null)
    if (this.head == null) {
      this.head = node;
    }
    else {
      // If linked list is not empty, find the last node of the linked list
      let current = this.head;
      // Move the current pointer to point to the last node in the linked list
      while (current.getNext() != null) {
        current = current.getNext();
      }
      // Now current is pointing to the last node of the linked list
      current.setNext(node); // Set the next node of the current last node of the linked list to be the new node
    }
  }

  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.getValue());
      current = current.getNext();
    }
  }

  insertAt(index, newNode) {
    // If linked list is empty, return since cannot insert into empty linked list
    if (this.head == null && index == 0) {
      this.head = newNode;
    }
    else if (index == 0) {
      newNode.setNext(this.head);
      this.head = newNode;
    }
    else {
      let current = this.head;
      // Set current to point to node before the index that we want to insert at
      for (let i = 0; i < index - 1; i++) {
        current = current.getNext();
      }
      newNode.setNext(current.getNext()); // Set the new node to point to the current node at index
      current.setNext(newNode); // Set the current node to point to the new node
    }
  }

  deleteAt(index) {
    // If linked list is empty, return since cannot insert into empty linked list
    if (this.head == null) {
      return;
    }
    else {
      // Case 1: If the index is 0 (deleting the head)
      // NOTE: There is no need to explicitly delete the old head because it will be deleted automatically by JavaScript if no variables are referring to it (Garbage collection)
      if (index == 0) {
        this.head = this.head.getNext(); // Set the new head to be the second node
      }
      else {
        // Case 2: If index is not 0 (not deleting the head)
        // Set current to point to node before the index of the node that we want to delete
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
          current = current.getNext();
        }
        current.setNext(current.getNext().getNext());
      }
    }
  }

  getAt(index) {
    if (this.head == null) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.getNext();
    }
    return current;
  }
}

module.exports = LinkedList;