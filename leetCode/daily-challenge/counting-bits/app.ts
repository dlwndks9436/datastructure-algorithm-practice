function countBits(n: number): number[] {
  const result = [0];
  let position = 0;
  let pointer = 1;
  while (result.length <= n) {
    const positionNum = result[position++];
    result.push(positionNum + 1);
    if (position === pointer) {
      position = 0;
      pointer *= 2;
    }
  }
  return result;
}

const n = 32;
const output = countBits(n);
console.log(output);

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Constraints:

// 0 <= n <= 105
