function validMountainArray(arr: number[]): boolean {
  let increasing: boolean | undefined;
  let decreasing: boolean | undefined;
  let isMountain: boolean = true;

  arr.forEach((val, idx) => {
    if (!isMountain) return;
    if (increasing === undefined && decreasing === undefined && idx === 1) {
      if (arr[idx] > arr[idx - 1]) {
        increasing = true;
      } else isMountain = false;
    }
    if (increasing) {
      if (arr[idx] === arr[idx - 1]) isMountain = false;
      else if (arr[idx] < arr[idx - 1]) {
        increasing = false;
        decreasing = true;
      }
    }
    if (decreasing && arr[idx] >= arr[idx - 1]) {
      isMountain = false;
    }
  });

  return increasing === false && decreasing === true ? isMountain : false;
}

const input: number[] = [0, 3, 2, 1];
const output = validMountainArray(input);
console.log(output);

// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true
