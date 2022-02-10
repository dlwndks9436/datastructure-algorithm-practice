function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let sum = 0;
  const sumMap = new Map<number, number>();
  sumMap.set(0, 1);
  nums.forEach((num) => {
    sum += num;
    count += (sumMap.get(sum - k) as number) || 0;
    sumMap.set(sum, (sumMap.get(sum) as number) + 1 || 1);
  });
  return count;
}

const nums = [1, 1, 1];
const k = 3;
const output = subarraySum(nums, k);
console.log(output);

// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2
