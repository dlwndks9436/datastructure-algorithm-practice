function numberOfArithmeticSlices(nums: number[]): number {
  function countArithmetics(index: number) {
    let result = 0;
    if (
      nums[index] === undefined ||
      nums[index + 1] === undefined ||
      nums[index + 2] === undefined
    )
      return 0;
    let diff1 = nums[index + 1] - nums[index];
    let diff2 = nums[index + 2] - nums[index + 1];
    if (diff1 === diff2) {
      result++;
      for (let i = index + 3; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === diff1) result++;
        else break;
      }
    }
    return result;
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += countArithmetics(i);
  }
  return count;
}

const input = [-1, 0, 1];

const output = numberOfArithmeticSlices(input);
console.log(output);

// An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
// Given an integer array nums, return the number of arithmetic subarrays of nums.

// A subarray is a contiguous subsequence of the array.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: 3
// Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
// Example 2:

// Input: nums = [1]
// Output: 0
