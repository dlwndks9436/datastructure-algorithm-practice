function findMaximumXOR(nums: number[]): number {
  let maxResult: number = 0;
  let mask: number = 0;
  let tempResult: number = 0;

  for (let i: number = 31; i >= 0; i--) {
    mask = mask | (1 << i);
    const prefixSet = new Set<number>();
    nums.forEach((val) => {
      prefixSet.add(mask & val);
    });
    tempResult = maxResult | (1 << i);

    for (const prefix of prefixSet) {
      if (prefixSet.has(tempResult ^ prefix)) {
        maxResult = tempResult;
        break;
      }
    }
  }
  return maxResult;
}

const input: number[] = [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70];
const output: number = findMaximumXOR(input);
console.log(output);

// Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.

// Example 1:

// Input: nums = [3,10,5,25,2,8]
// Output: 28
// Explanation: The maximum result is 5 XOR 25 = 28.
// Example 2:

// Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
// Output: 127
