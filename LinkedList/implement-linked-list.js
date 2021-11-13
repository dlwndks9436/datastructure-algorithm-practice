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
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newValue = new Node(value);
    this.tail.next = newValue;
    this.tail = newValue;
    this.length++;
    return this;
  }

  prepend(value) {
    const newValue = new Node(value);
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
    newNode.next = currentNode;
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
    this.length--;
    return this;
  }

  traverseToNode(index) {
    if (index >= this.length) {
      return new Error(`input must be smaller than ${this.length}`);
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
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

  reverse() {
    if (this.length === 1) {
      return this;
    }
    // let node1 = this.head;
    // let node2 = node1.next;

    // while (node2) {
    //   node1.next = node2.next;
    //   this.prepend(node2.value);
    //   node2 = node1.next;
    // }
    // return this;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

const result = myLinkedList.printList();

const reversedList = myLinkedList.reverse();

const result2 = reversedList.printList();
console.log(result);
console.log(result2);
