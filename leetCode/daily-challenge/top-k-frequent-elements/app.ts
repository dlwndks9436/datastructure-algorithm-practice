function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });
  const array = new Array<[number, number]>();
  map.forEach((val, key) => {
    array.push([key, val]);
  });
  return array
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((val) => val[0]);
}

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
