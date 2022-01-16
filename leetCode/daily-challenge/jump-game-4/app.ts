function minJumps(arr: number[]): number {
  const path: { [key: number]: number[] } = {};
  const queue: number[][] = [[0, 0]];
  const visited: { [key: number]: boolean } = {};
  let pointer: number = 0;
  let end: number = 0;
  let shortcut: number | undefined;

  //make path
  for (let i: number = 0; i < arr.length; i++) {
    if (path[arr[i]] === undefined) {
      path[arr[i]] = [i];
    } else {
      path[arr[i]].push(i);
    }
  }

  const jump = (position: number, step: number) => {
    if (arr[position - 1] !== undefined && visited[position - 1] !== true) {
      queue.push([position - 1, step + 1]);
    }
    if (arr[position + 1] !== undefined && visited[position + 1] !== true) {
      queue.push([position + 1, step + 1]);
    }
    if (path[arr[position]] !== null) {
      path[arr[position]].forEach((val) => {
        if (visited[val] !== true && val !== position) {
          if (val === arr.length - 1) {
            shortcut = 1;
          } else if (val === arr.length - 2) {
            shortcut = 2;
          }
          queue.push([val, step + 1]);
        }
      });
    }
    visited[position] = true;
    if (pointer === end) {
      end = queue.length - 1;
    }
  };

  while (pointer < queue.length) {
    if (queue[pointer][0] === arr.length - 1) break;
    if (shortcut === 1) return queue[pointer][1] + 1;
    if (shortcut === 2) return queue[pointer][1] + 2;
    jump(queue[pointer][0], queue[pointer][1]);
    pointer++;
  }
  return queue[pointer][1];
}

const input: number[] = [7, 7, 2, 1, 7, 7, 7, 3, 4, 1];
const output: number = minJumps(input);
console.log(output);

// Given an array of integers arr, you are initially positioned at the first index of the array.

// In one step you can jump from index i to index:

// i + 1 where: i + 1 < arr.length.
// i - 1 where: i - 1 >= 0.
// j where: arr[i] == arr[j] and i != j.
// Return the minimum number of steps to reach the last index of the array.

// Notice that you can not jump outside of the array at any time.

// Example 1:

// Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
// Output: 3
// Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.
// Example 2:

// Input: arr = [7]
// Output: 0
// Explanation: Start index is the last index. You do not need to jump.
// Example 3:

// Input: arr = [7,6,9,6,9,6,9,7]
// Output: 1
// Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
