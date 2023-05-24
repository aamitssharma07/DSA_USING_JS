class Stack {
  constructor() {
    this.arr = [];
    this.top = -1;
  }

  push(value) {
    // There is no overflow condition in Javascript Implementation of Array
    this.arr[++this.top] = value;
  }

  pop() {
    if (this.top === -1) console.log("Stack is undeflow");
    else return this.arr[this.top--];
  }
}

const stack = new Stack();
stack.push(12);
stack.push(13);
stack.push(14);
console.log(stack.pop());
stack.push(19);
console.log(stack.top);
console.log(stack.arr);
