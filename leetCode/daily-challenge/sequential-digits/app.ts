function sequentialDigits(low: number, high: number): number[] {
  let lowLen: number = low.toString().length;
  let highLen: number = high.toString().length;

  const numStr: string = "123456789";
  const result: number[] = new Array();

  for (let i: number = lowLen; i <= highLen; i++) {
    for (let j: number = 0; j <= 9 - i; j++) {
      const newNum: number = parseInt(numStr.substring(j, j + i));
      if (low <= newNum && newNum <= high) result.push(newNum);
    }
  }
  return result;
}

const low: number = 1;
const high: number = 1000;
const output: number[] = sequentialDigits(low, high);
console.log(output);

// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]

// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]
