class Node {
  constructor(value) {
    this.value = value;
    this.link = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  Enque(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.link = node;
      this.tail = node;
    }
  }

  Deque() {
    if (!this.head) return null;
    else {
      const temp = this.head;
      this.head = this.head.link;
      return temp.value;
    }
  }
}

const queue = new Queue();
console.log(queue.Deque());
queue.Enque(5);
queue.Enque(24);
queue.Enque(35);
console.log(queue.Deque());
console.log(queue);
