function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count: number = 0;

  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return n <= 1 ? true : false;
  }

  flowerbed.forEach((val, idx) => {
    if (idx === 0 && val === 0 && flowerbed[idx + 1] === 0) {
      count++;
      flowerbed[idx] = 1;
    } else if (
      val === 0 &&
      idx === flowerbed.length - 1 &&
      flowerbed[idx - 1] === 0
    ) {
      count++;
      flowerbed[idx] = 1;
    } else if (
      flowerbed[idx - 1] === 0 &&
      val === 0 &&
      flowerbed[idx + 1] === 0
    ) {
      count++;
      flowerbed[idx] = 1;
    }
  });
  return count >= n ? true : false;
}

const flowerbed: number[] = [0, 0, 0, 0];
const n: number = 3;
const output: boolean = canPlaceFlowers(flowerbed, n);
console.log(output);

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be plant

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
