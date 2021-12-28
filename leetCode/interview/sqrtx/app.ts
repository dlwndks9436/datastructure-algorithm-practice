function mySqrt(x: number): number {
  let head: number = 0;
  let tail: number = Math.ceil(x / 2);

  while (head <= tail) {
    const middle: number = Math.floor((head + tail) / 2);
    if (middle ** 2 > x) {
      tail = middle - 1;
    } else if (middle ** 2 < x) {
      head = middle + 1;
    } else {
      return middle;
    }
  }
  return tail;
}

const input: number = 4;
const output: number = mySqrt(input);
console.log(output);

// Input: x = 4;
// Output: 2;

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
