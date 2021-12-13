function intersect(nums1: number[], nums2: number[]): number[] {
  type objectOfNumbers = { [number: number]: [number, number] };
  const storage: objectOfNumbers = {};
  const result: number[] = new Array();
  for (const num of nums1) {
    if (!storage[num]) {
      storage[num] = [0, 0];
    }
    storage[num][0]++;
  }
  for (const num of nums2) {
    if (!storage[num]) {
      storage[num] = [0, 0];
    }
    storage[num][1]++;
  }
  for (const num in storage) {
    if (storage[num][0] > 0 && storage[num][1] > 0) {
      const minValue: number =
        storage[num][0] <= storage[num][1] ? storage[num][0] : storage[num][1];
      for (let i = 0; i < minValue; i++) {
        result.push(Number.parseInt(num));
      }
    }
  }

  return result;
}

const input1 = [4, 9, 5];
const input2 = [9, 4, 9, 8, 4];
const output = intersect(input1, input2);
console.log(output);

// Input: (nums1 = [1, 2, 2, 1]), (nums2 = [2, 2]);
// Output: [2, 2];

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
