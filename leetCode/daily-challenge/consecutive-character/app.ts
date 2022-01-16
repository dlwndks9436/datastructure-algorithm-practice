function maxPower(s: string): number {
  let max: number = 1;
  let counter: number = 1;
  for (let i: number = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      counter++;
    } else {
      if (counter > max) {
        max = counter;
      }
      counter = 1;
    }
  }
  if (counter > max) {
    max = counter;
  }
  return max;
}

const input: string = "cc";
const output: number = maxPower(input);
console.log(output);

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
