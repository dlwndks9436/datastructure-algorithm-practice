// const myLinkedList = {
//  head: {
//   value: 10,
//   next: {
//    value: 5,
//    next : {
//     value: 16,
//     next: null
//    }
//   }
//  }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.before = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newValue = new Node(value);
    newValue.before = this.tail;
    this.tail.next = newValue;
    this.tail = newValue;
    this.length++;
    return this;
  }

  prepend(value) {
    const newValue = new Node(value);
    this.head.before = newValue;
    newValue.next = this.head;
    this.head = newValue;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);

    const previousNode = this.traverseToNode(index - 1);
    const currentNode = previousNode.next;

    previousNode.next = newNode;
    newNode.before = previousNode;
    newNode.next = currentNode;
    currentNode.before = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (this.length < 2) {
      return new Error("The list is not long enough");
    }
    if (index < 0 || index >= this.length) {
      return new Error("Not valide input");
    }
    if (index === 0) {
      this.head = this.head.next;
      this.head.before = null;
      this.length--;
      return this;
    }
    if (index === this.length - 1) {
      const newLastNode = this.traverseToNode(index - 1);
      newLastNode.next = null;
      this.length--;
      return this;
    }
    const previousNode = this.traverseToNode(index - 1);
    const nextNode = previousNode.next.next;
    previousNode.next = nextNode;
    nextNode.before = previousNode;
    this.length--;
    return this;
  }

  traverseToNode(index) {
    if (index >= this.length) {
      return new Error(`input must be smaller than ${this.length}`);
    }
    const halfWay = Math.floor(index / 2);
    if (index <= halfWay) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    } else if (index > halfWay) {
      let node = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        node = node.before;
      }
      return node;
    }
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(11);
myLinkedList.append(12);
myLinkedList.append(13);
myLinkedList.append(14);
myLinkedList.insert(2, 1);
myLinkedList.remove(5);

const result = myLinkedList.printList();
console.log(result);
