function sortedSquares(nums: number[]): number[] {
  const result: number[] = [];
  let leftPointer: number = 0;
  let rightPointer: number = nums.length - 1;
  nums = nums.map((num) => num ** 2);

  for (let i: number = nums.length - 1; i >= 0; i--) {
    nums[leftPointer] <= nums[rightPointer]
      ? (result[i] = nums[rightPointer--])
      : (result[i] = nums[leftPointer++]);
  }
  return result;
}

const result: number[] = sortedSquares([-7, -3, 2, 3, 11]);
console.log(result);

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
