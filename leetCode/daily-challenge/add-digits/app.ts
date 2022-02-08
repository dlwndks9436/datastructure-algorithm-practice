function addDigits(num: number): number {
  let total: number = 0;
  for (const digit of num.toString()) {
    total += Number.parseInt(digit);
  }
  if (total > 9) return addDigits(total);
  else return total;
}

const input = 38;
const output = addDigits(38);
console.log(output);

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
