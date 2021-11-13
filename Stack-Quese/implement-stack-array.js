class Stack {
  constructor() {
    this.data = new Array();
    this.length = this.data.length;
  }

  peek() {
    this.length = this.data.length;
    console.log("length : ", this.length, this.data);
    console.log(this?.data[this.length - 1]);
    return this?.data[this.length - 1];
  }
  push(value) {
    return this.data.push(value);
  }
  pop() {
    return this.data.pop();
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
