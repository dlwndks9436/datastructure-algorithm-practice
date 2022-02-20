function swap(nums: number[], x: number, y: number) {
  var tmp = nums[x];
  nums[x] = nums[y];
  nums[y] = tmp;
}

function maxHeapSort(nums: number[], n: number, parent: number) {
  var left = parent * 2 + 1;
  while (left < n) {
    var maxChild = left;
    var right = left + 1;
    if (right < n && nums[right] > nums[left]) {
      maxChild = right;
    }
    if (nums[maxChild] <= nums[parent]) {
      return;
    }
    swap(nums, parent, maxChild);
    parent = maxChild;
    left = parent * 2 + 1;
  }
}

function minimumDeviation(nums: number[]): number {
  const n = nums.length;
  if (n < 2) return 0;
  nums.forEach((v, i) => v % 2 === 1 && (nums[i] *= 2));
  for (var i = (n - 1) >> 1; i >= 0; i--) {
    maxHeapSort(nums, n, i);
  }
  let min = Math.min(...nums);
  let max = nums[0];
  let ans = max - min;
  while (max % 2 === 0) {
    max /= 2;
    min = Math.min(max, min);
    nums[0] = max;
    maxHeapSort(nums, n, 0);
    max = nums[0];
    ans = Math.min(ans, max - min);
  }
  return ans;
}

const nums = [3, 5];
const output = minimumDeviation(nums);
console.log(output);

// You are given an array nums of n positive integers.

// You can perform two types of operations on any element of the array any number of times:

// If the element is even, divide it by 2.
// For example, if the array is [1,2,3,4], then you can do this operation on the last element, and the array will be [1,2,3,2].
// If the element is odd, multiply it by 2.
// For example, if the array is [1,2,3,4], then you can do this operation on the first element, and the array will be [2,2,3,4].
// The deviation of the array is the maximum difference between any two elements in the array.

// Return the minimum deviation the array can have after performing some number of operations.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: 1
// Explanation: You can transform the array to [1,2,3,2], then to [2,2,3,2], then the deviation will be 3 - 2 = 1.
// Example 2:

// Input: nums = [4,1,5,20,3]
// Output: 3
// Explanation: You can transform the array after two operations to [4,2,5,5,3], then the deviation will be 5 - 2 = 3.
// Example 3:

// Input: nums = [2,10,8]
// Output: 3
