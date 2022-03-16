function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack = new Array<number>();
  let pushPointer = 0;
  let popPointer = 0;
  while (popPointer < popped.length) {
    if (stack[stack.length - 1] === popped[popPointer]) {
      stack.pop();
      popPointer++;
    } else if (pushPointer < pushed.length) {
      stack.push(pushed[pushPointer++]);
    } else {
      break;
    }
  }
  return stack.length > 0 ? false : true;
}

const pushed = [1, 2, 3, 4, 5];
const popped = [4, 5, 3, 2, 1];
const output = validateStackSequences(pushed, popped);
console.log(output);

// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

// Example 1:

// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4),
// pop() -> 4,
// push(5),
// pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
// Example 2:

// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.

// Constraints:

// 1 <= pushed.length <= 1000
// 0 <= pushed[i] <= 1000
// All the elements of pushed are unique.
// popped.length == pushed.length
// popped is a permutation of pushed.
