function findOriginalArray(changed: number[]): number[] {
  changed.sort((a, b) => a - b);
  const odd = new Array<number>();
  const even = new Array<number>();
  const queue = new Array<number>();
  const result = new Array<number>();
  let index = 0;
  for (let num of changed) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  while (even.length > 0) {
    const num = even.pop() as number;
    if (index < queue.length && num === queue[index] / 2) {
      index++;
      result.push(num);
    } else if (num / 2 === odd[odd.length - 1]) {
      result.push(odd.pop() as number);
    } else {
      queue.push(num);
    }
  }
  if (odd.length > 0 || index !== queue.length) return [];
  return result;
}

const input = [3, 1, 3, 4, 2];
const output = findOriginalArray(input);
console.log(output);

// An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

// Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

// Example 1:

// Input: changed = [1,3,4,2,6,8]
// Output: [1,3,4]
// Explanation: One possible original array could be [1,3,4]:
// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.
// Other original arrays could be [4,3,1] or [3,1,4].
// Example 2:

// Input: changed = [6,3,0,1]
// Output: []
// Explanation: changed is not a doubled array.
// Example 3:

// Input: changed = [1]
// Output: []
// Explanation: changed is not a doubled array.

// Constraints:

// 1 <= changed.length <= 105
// 0 <= changed[i] <= 105
