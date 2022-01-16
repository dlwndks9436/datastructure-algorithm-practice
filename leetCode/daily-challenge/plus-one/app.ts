function plusOne(digits: number[]): number[] {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1]++;
    return digits;
  } else {
    digits[digits.length - 1] = 0;
    if (digits.length === 1) {
      digits.unshift(0);
    }
    return plusOne(digits.slice(0, -1)).concat(digits[digits.length - 1]);
  }
}

const input = [8, 9];
const output = plusOne(input);
console.log(output);
