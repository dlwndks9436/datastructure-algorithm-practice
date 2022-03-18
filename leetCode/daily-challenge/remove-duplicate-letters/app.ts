function removeDuplicateLetters(s: string): string {
  const result = new Array<string>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (result.indexOf(char) > -1) {
      continue;
    }
    while (
      result.length > 0 &&
      result[result.length - 1] > char &&
      s.indexOf(result[result.length - 1], i) > 0
    ) {
      result.pop();
    }
    result.push(char);
  }
  return result.join("");
}

const input = "cdadabcc";
const output = removeDuplicateLetters(input);
console.log(output);

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.
