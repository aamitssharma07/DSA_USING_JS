class Node {
  constructor(value) {
    this.value = value;
    this.link = null;
  }
}
class StackUsingLinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    const node = new Node(value);
    node.link = this.head;
    this.head = node;
  }

  pop() {
    if (!this.head) console.log("Underf Flow condition");
    else {
      const temp = this.head;
      this.head = temp.link;
      return temp.value;
    }
  }
}

const stack = new StackUsingLinkedList();
stack.push(15);
stack.push(25);
stack.push(30);
console.log(stack.pop());
