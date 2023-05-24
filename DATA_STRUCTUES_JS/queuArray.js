"use strict";
// seal and freeze is used to make the array static

class Queue {
  constructor() {
    this.arr = Object.seal([null, null, null, null]);
    this.head = 0;
    this.tail = 0;
  }

  Enque(value) {
    this.tail = (this.tail + 1) % this.arr.length;
    if (this.tail === this.head) {
      console.log("Overflow condition");

      this.tail === 0 ? (this.tail = this.arr.length - 1) : --this.tail;
    } else this.arr[this.tail] = value;
  }

  Deque() {
    if (this.tail === this.head) console.log("Undeflow condition");
    else this.head = (this.head + 1) % this.arr.length;
    return this.arr[this.head];
  }
}

let queue = new Queue();
queue.Enque(15);
queue.Enque(18);
queue.Enque(7);
console.log(queue.Deque());
queue.Enque(10);
console.log(queue.arr);
console.log(queue.Deque());
queue.Enque(45);
console.log(queue.arr);
