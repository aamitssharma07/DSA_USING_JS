class Node {
  constructor(value) {
    this.value = value;
    this.link = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tempHead = null;
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
  // ITERATIVE TRAVERSE
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
  // RECURSIVE TRAVERSE
  // ******************************************
  recursiveTraverse = function (head) {
    if (head) {
      console.log(head.value);
      this.recursiveTraverse(head.link);
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

  // ******************************************
  // ITERATIVE REVERSING LINKED LIST
  // ******************************************

  iterativeReverse = function () {
    if (!this.head) console.log("Linked list is empty, can't reverse");
    else if (!this.head.link)
      console.log("Linked List has one node, no need to reverse");
    else {
      let current = this.head;
      let prev = null;
      let next = current.link;
      while (current) {
        next = current.link;
        current.link = prev;
        prev = current;
        current = next;
      }

      this.head = prev;
    }
  };

  // ******************************************
  // RECURSIVE REVERSING LINKED LIST
  // ******************************************

  recursiveReverse(Head) {
    if (!this.head) console.log("Linked List is empty");
    else if (!this.head.link)
      console.log("Linked list has only one node, no need to reverse it");
    else {
      if (Head.link) {
        this.recursiveReverse(Head.link);
        Head.link.link = Head;
        if (Head === this.head) {
          Head.link = null;
          this.head = this.tempHead;
        }
      } else {
        this.tempHead = Head;
      }
    }
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // ***************************************
  // INSERT Node
  // **************************************

  addNode = function (value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.head.link = this.head;
    } else {
      let temp = this.head;
      while (this.head !== temp.link) temp = temp.link;
      temp.link = node;
      node.link = this.head;
    }
  };

  // *************************************
  // TRAVERSE Node
  // **************************************

  traverse() {
    if (!this.head) console.log("Empty Linked ListS");
    else {
      let temp = this.head.link;
      console.log(this.head.value);
      while (temp !== this.head) {
        console.log(temp.value);
        temp = temp.link;
      }
    }
  }
}

const linkedList = new SingleLinkedList();
linkedList.addNodeStart(22);
linkedList.addNodePosition(13, 22);
linkedList.addNodeEnd(18);
linkedList.addNodeEnd(134);
linkedList.addNodeEnd(155);
linkedList.deleteNodePosition(18);
linkedList.deleteNodeStart();
linkedList.deleteNodeEnd();
linkedList.iterativeReverse();
linkedList.recursiveReverse(SingleLinkedList.head);
linkedList.traverse();

const circlularLinkedList = new CircularLinkedList();
circlularLinkedList.addNode(15);
circlularLinkedList.addNode(20);
circlularLinkedList.addNode(30);
circlularLinkedList.traverse();
