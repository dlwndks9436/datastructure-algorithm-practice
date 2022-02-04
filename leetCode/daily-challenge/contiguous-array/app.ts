function findMaxLength(nums: number[]): number {
  let maxlen = 0,
    count = 0;
  const countingMap = new Map();
  countingMap.set(0, -1);
  nums.forEach((num, idx) => {
    if (num === 1) count++;
    else count--;
    if (countingMap.has(count)) {
      maxlen = Math.max(maxlen, idx - countingMap.get(count));
    } else {
      countingMap.set(count, idx);
    }
  });
  return maxlen;
}

const input: number[] = [1, 0];
const output: number = findMaxLength(input);
console.log(output);

// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

// Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:

// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
