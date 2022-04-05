function splitArray(nums: number[], m: number): number {
  const array = new Array<number[]>(m);
  const total = new Array<number>(m);
  const pointers = new Array<number>(m).fill(0);
  let max = 0;
  let lastValue = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < m - 1) {
      array[i] = [nums[i]];
      total[i] = nums[i];
    } else {
      if (!array[m - 1]) {
        array[m - 1] = [];
      }
      array[m - 1].push(nums[i]);
      lastValue += nums[i];
    }
    max += nums[i];
  }
  total[m - 1] = lastValue;
  while (true) {
    let currentMax = 0;
    let index = 0;
    total.forEach((val, idx) => {
      if (val >= currentMax) {
        currentMax = val;
        index = idx;
      }
    });
    if (currentMax < max) {
      max = currentMax;
    }
    const currentIndex = pointers[index];
    if (currentIndex < array[index].length - 1 && array[index - 1]) {
      pointers[index] += 1;
      const value = array[index][currentIndex];
      total[index] -= value;
      total[index - 1] += value;
      array[index - 1].push(value);
    } else {
      return max;
    }
  }
}

const nums = [1, 4, 4];
const m = 3;
const output = splitArray(nums, m);
console.log(output);

// Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

// Write an algorithm to minimize the largest sum among these m subarrays.

// Example 1:

// Input: nums = [7,2,5,10,8], m = 2
// Output: 18
// Explanation:
// There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8],
// where the largest sum among the two subarrays is only 18.
// Example 2:

// Input: nums = [1,2,3,4,5], m = 2
// Output: 9
// Example 3:

// Input: nums = [1,4,4], m = 3
// Output: 4

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 106
// 1 <= m <= min(50, nums.length)
