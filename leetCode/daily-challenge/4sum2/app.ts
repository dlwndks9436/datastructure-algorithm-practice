function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  let count = 0;
  const makeSumMap = (arr1: number[], arr2: number[]) => {
    const newMap = new Map();
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        newMap.set(arr1[i] + arr2[j], newMap.get(arr1[i] + arr2[j]) + 1 || 1);
      }
    }
    return newMap;
  };

  const sumMap12 = makeSumMap(nums1, nums2);
  const sumMap34 = makeSumMap(nums3, nums4);

  sumMap12.forEach((val, key) => {
    if (sumMap34.has(-key)) {
      count += val * sumMap34.get(-key);
    }
  });
  return count;
}

const nums1: number[] = [
  -16, -30, -6, 8, -26, -23, -14, -29, -23, 10, 7, 9, 5, -13, -2, -18, 5, 5,
  -31, -26, 7, -32, -18, -30, -23, -30, 9, -1, -13, -27, -9, -14, 1, -18, -6, 5,
  2, -15, -19, 5, -17, 6, -26, -11, -29, -15, -9, -12, -11, -18, -17, 1, 1, -1,
  -10, 9, -3, 7, 0, -1, -10, 10, -3, -26, -11, -27, -2, -26, -27, -8, -26, -23,
  -10, 3, 0, -11, -5, -4, -10, -31, 8, -11, -22, -14, -9, -22, -20, -20, -5, -1,
  10, -29, -32, 7, -26, -2, 8, 4, -15, -24,
];
const nums2: number[] = [
  8, -15, -26, 10, -21, -20, 6, -20, -22, -6, 8, -8, -27, -9, -1, -27, -2, -24,
  1, 9, -1, -4, 9, 7, -21, -11, 0, -7, 3, 4, -13, -19, -13, -32, -12, -30, -17,
  -5, -31, -21, -14, -23, -31, -6, -26, -4, -21, -12, 1, -3, -3, 5, 4, -13, -2,
  -20, -16, -6, 3, -16, -1, -18, -31, -2, 4, -2, -32, -5, -7, 5, -5, -22, -20,
  -26, 8, -24, -8, -23, 4, 7, -10, -31, -22, -7, -26, 6, -17, 5, -28, 5, 6, -11,
  -29, -1, -1, -12, -32, -16, -8, -10,
];
const nums3: number[] = [
  10, -25, -2, -1, -10, -18, -20, -17, 10, -31, 6, -12, 5, -2, -19, -2, -25,
  -26, -21, -29, 8, -28, -8, -18, -32, -24, -17, 2, -25, -32, -7, 3, -28, -31,
  -21, -9, 2, -2, -18, -25, -14, -15, -11, 5, -29, -23, -4, -4, 10, 0, -9, -24,
  6, -23, 5, -7, -16, 5, -17, 6, -18, -8, 5, -6, -29, -15, 9, 10, -12, 8, 5, 3,
  5, 9, -6, -25, -28, -21, 8, -17, -31, -12, -2, 2, -12, 2, -28, 9, -28, -13,
  -17, -27, 10, -26, 6, -25, -25, -19, 10, -8,
];
const nums4: number[] = [
  -6, -29, -15, -6, -16, -18, 1, -27, -15, -8, 4, -14, -11, -28, 5, -13, -18,
  -30, -19, -17, -17, 3, 6, -7, -5, -23, -20, -32, 0, -17, -24, -10, -11, -23,
  -12, -31, -29, -31, 3, -18, -16, -13, 10, -18, -28, -27, -1, -23, 2, 10, 0,
  -5, -8, 4, -18, -16, -3, -4, -22, -15, 2, 0, -30, 1, -1, -14, -9, -24, -24,
  -17, 10, 0, -29, -9, -19, -12, -22, 1, -14, -22, 2, -31, -22, -30, -29, -16,
  -15, -15, -14, -25, -28, 7, -29, -5, -30, 7, 9, 5, 0, -6,
];

const output = fourSumCount(nums1, nums2, nums3, nums4);
console.log(output);

// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

// Example 1:

// Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// Output: 2
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
// Example 2:

// Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
// Output: 1
