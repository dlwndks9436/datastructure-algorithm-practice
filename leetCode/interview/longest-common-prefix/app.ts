function longestCommonPrefix(strs: string[]): string {
  let result: string = "";

  if (strs.length === 1) {
    return strs[0];
  }

  for (let i: number = 0; i < strs[0].length; i++) {
    for (let j: number = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[j - 1][i]) {
        return result;
      }
      if (j === strs.length - 1) {
        result += strs[j][i];
      }
    }
  }
  return result;
}

const input: string[] = ["flower", "flow", "flight"];
const output: string = longestCommonPrefix(input);
console.log(output);

// Input: strs = ["flower", "flow", "flight"];
// Output: "fl";

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
