/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i: number = 0; i < Math.floor(s.length / 2); i++) {
    const temp: string = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
}

const input: string[] = ["h", "e", "l", "l", "o"];

reverseString(input);

console.log(input);

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
