class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    console.log(this?.first?.value);
    return this?.first?.value;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    const firstValue = this?.first?.value;
    this.first = this?.first?.next;
    if (this.length > 0) {
      this.length--;
    }
    if (this.first === null) {
      this.last === null;
    }
    return firstValue;
  }
}

const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(25);
myQueue.enqueue(50);
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
