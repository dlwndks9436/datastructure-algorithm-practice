class FreqStack {
  stack: Array<number>;
  map: Map<number, number>;
  constructor() {
    this.stack = new Array<number>();
    this.map = new Map<number, number>();
  }

  push(val: number): void {
    if (this.stack.length < 1) {
      this.stack.push(val);
      this.map.set(val, 1);
    } else {
      const valQuantity = this.map.get(val) || 0;
      const tempArr = new Array<number>();
      while (this.stack.length > 0) {
        const lastNum = this.stack[this.stack.length - 1];
        const lastQuantity = this.map.get(lastNum);
        if (!lastQuantity || lastQuantity - 1 <= valQuantity) {
          this.stack.push(val);
          this.map.set(val, valQuantity + 1);
          while (tempArr.length > 0) {
            const num = tempArr.pop() as number;
            const quantity = this.map.get(num)!;
            this.stack.push(num);
            this.map.set(num, quantity + 1);
          }
          break;
        } else {
          tempArr.push(this.stack.pop()!);
          this.map.set(lastNum, lastQuantity - 1);
        }
      }
    }
  }

  pop(): number {
    const num = this.stack.pop() as number;
    this.map.set(num, this.map.get(num)! - 1);
    return num;
  }
}

const freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
console.log(freqStack.stack);
freqStack.push(7); // The stack is [5,7]
console.log(freqStack.stack);
freqStack.push(5); // The stack is [5,7,5]
console.log(freqStack.stack);
freqStack.push(7); // The stack is [5,7,5,7]
console.log(freqStack.stack);
freqStack.push(4); // The stack is [5,7,5,7,4]
console.log(freqStack.stack);
freqStack.push(5); // The stack is [5,7,5,7,4,5]
console.log(freqStack.stack);
freqStack.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
console.log(freqStack.stack);
freqStack.pop(); // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
console.log(freqStack.stack);
freqStack.pop(); // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
console.log(freqStack.stack);
freqStack.pop(); // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
console.log(freqStack.stack);
/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

// Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

// Implement the FreqStack class:

// FreqStack() constructs an empty frequency stack.
// void push(int val) pushes an integer val onto the top of the stack.
// int pop() removes and returns the most frequent element in the stack.
// If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.

// Example 1:

// Input
// ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
// [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
// Output
// [null, null, null, null, null, null, null, 5, 7, 5, 4]

// Explanation
// FreqStack freqStack = new FreqStack();
// freqStack.push(5); // The stack is [5]
// freqStack.push(7); // The stack is [5,7]
// freqStack.push(5); // The stack is [5,7,5]
// freqStack.push(7); // The stack is [5,7,5,7]
// freqStack.push(4); // The stack is [5,7,5,7,4]
// freqStack.push(5); // The stack is [5,7,5,7,4,5]
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
// freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
// freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].

// Constraints:

// 0 <= val <= 109
// At most 2 * 104 calls will be made to push and pop.
// It is guaranteed that there will be at least one element in the stack before calling pop.
