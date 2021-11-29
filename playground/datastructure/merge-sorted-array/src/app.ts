/**
 Do not return anything, modify nums1 in-place instead.
 */

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   const temp: number[] = Array.from(nums1);
//   let point1: number = 0;
//   let point2: number = 0;
//   for (let i: number = 0; i < m + n; i++) {
//     if (point1 === m) {
//       nums1[i] = nums2[point2++];
//     } else if (point2 === n) {
//       nums1[i] = temp[point1++];
//     } else {
//       temp[point1] <= nums2[point2]
//         ? (nums1[i] = temp[point1++])
//         : (nums1[i] = nums2[point2++]);
//     }
//   }
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let point1: number = m - 1;
  let point2: number = n - 1;
  for (let i: number = m + n - 1; i >= 0; i--) {
    if (point1 < 0) {
      nums1[i] = nums2[point2--];
    } else if (point2 < 0) {
      nums1[i] = nums1[point1--];
    } else {
      nums1[point1] <= nums2[point2]
        ? (nums1[i] = nums2[point2--])
        : (nums1[i] = nums1[point1--]);
    }
  }
}

const array1: number[] = [1, 2, 3, 0, 0, 0];
const length1: number = 3;
const array2: number[] = [2, 5, 6];
const length2: number = 3;

merge(array1, length1, array2, length2);
console.log(array1);

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
