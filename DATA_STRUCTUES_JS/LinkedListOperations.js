class Node {
  constructor(value) {
    this.value = value;
    this.link = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // ******************************************
  // INSERT THE NODE AT START
  // ******************************************
  addNodeStart = function (value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else {
      node.link = this.head;
      this.head = node;
    }
  };

  // ******************************************
  // INSERT THE NODE AT END
  // ******************************************
  addNodeEnd = function (value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else {
      let t = this.head;
      while (t.link) t = t.link;
      t.link = node;
    }
  };

  // ******************************************
  // INSERT THE NODE AT END
  // ******************************************
  addNodePosition = function (value, position) {
    const node = new Node(value);
    if (!this.head) console.log(`Linked List is empty, can't add the node`);
    else {
      let t = this.head;
      while (t.value !== position) {
        if (t.link) t = t.link;
        else {
          console.log(
            `Can't find the node having ${position} value so new node is not added `
          );
          return;
        }
      }

      node.link = t.link;
      t.link = node;
    }
  };

  // ******************************************
  // TRAVERSE THE linkedList
  // ******************************************

  traverse = function () {
    let t = this.head;
    if (!t) console.log(`Linked List is empty`);
    else
      while (t) {
        console.log(t.value);
        t = t.link;
      }
  };
  // ******************************************
  // DELETE NODE AT START
  // ******************************************

  deleteNodeStart = function () {
    if (!this.head) console.log("Linked List is empty");
    else this.head = this.head.link;
  };

  // ******************************************
  // DELETE NODE AT END
  // ******************************************
  deleteNodeEnd = function () {
    if (!this.head) console.log("Linked List is empty");
    else if (!this.head.link) this.head = null;
    else {
      let t = this.head;
      while (t.link.link) t = t.link;
      t.link = null;
    }
  };

  // ******************************************
  // DELETE NODE AT GIVEN NODE VALUE
  // ******************************************
  deleteNodePosition = function (position) {
    if (!this.head) console.log("Linked List is empty, can't perform delete");
    else if (!this.head.link) {
      if (this.head.value === position) this.head = null;
      else console.log(`Node with ${position} is not present, can't delete`);
    } else {
      let t = this.head;
      if (t.value === position) this.deleteNodeStart();
      else {
        while (t.link.value !== position) {
          if (t.link.link) t = t.link;
          else {
            console.log(
              `Node with value ${position} is not present, can't delete`
            );
            return;
          }
        }
        t.link = t.link.link;
      }
    }
  };
}

const linkedList = new LinkedList();
linkedList.addNodeStart(22);
linkedList.addNodePosition(13, 22);
linkedList.addNodeEnd(18);
linkedList.addNodeEnd(134);
linkedList.addNodeEnd(155);
linkedList.deleteNodePosition(155);
linkedList.traverse();
