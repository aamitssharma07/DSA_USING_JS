class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  // *************************************
  // Adding Node at Start
  // *************************************

  addNodeStart(value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  // *************************************
  // Adding Node at End
  // *************************************

  addNodeEnd(value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else {
      let temp = this.head;
      while (temp.next) temp = temp.next;
      temp.next = node;
      node.prev = temp;
    }
  }

  // *************************************
  // Adding Node at position
  // *************************************

  addNodePosition(value, position) {
    const node = new Node(value);
    if (!this.head)
      console.log(
        `Linked list s empty, so can't find the node with value ${position}`
      );
    else if (!this.head.next)
      if (this.head.value == position) {
        this.head.next = node;
        node.prev = this.head;
      } else
        console.log(
          `Not able to find the node withh value ${position}, so can't add node`
        );
    else {
      let temp = this.head;
      while (temp.value != position && temp.next) temp = temp.next;

      if (!temp.next)
        console.log(
          `Not able to find the node withh value ${position}, so can't add node`
        );
      else {
        node.prev = temp;
        node.next = temp.next;
        temp.next = node;
        node.next.prev = node;
      }
    }
  }

  //   // *************************************
  //   // Traversing Node
  //   // *************************************

  traverse() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.addNodeStart(15);
// doubleLinkedList.addNodeEnd(20);
doubleLinkedList.addNodePosition(1, 15);
doubleLinkedList.addNodePosition(2, 15);
doubleLinkedList.addNodePosition(3, 18);

doubleLinkedList.traverse();
