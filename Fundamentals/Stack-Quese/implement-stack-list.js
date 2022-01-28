class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log(this?.top?.value);
    return this?.top?.value;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return null;
    }
    const topValue = this.top.value;
    this.top = this.top.next;
    this.length--;
    return topValue;
  }
  //isEmpty
  isEmpty() {
    if (this.length === 0) {
      console.log("is Empty");
      return true;
    }
    console.log("is not Empty");
    return false;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push(1);
myStack.peek();
myStack.push(2);
myStack.peek();
myStack.isEmpty();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();
