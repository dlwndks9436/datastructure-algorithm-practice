function majorityElement(nums: number[]): number {
  const numsMap = new Map();
  let maxCount = 0;
  let candidate = 0;
  for (const num of nums) {
    numsMap.set(num, numsMap.get(num) + 1 || 1);
    const currentCount = numsMap.get(num);
    if (currentCount > maxCount) {
      maxCount = currentCount;
      candidate = num;
    }
  }
  return candidate;
}

const nums = [3, 2, 3];
const output = majorityElement(nums);
console.log(output);

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
