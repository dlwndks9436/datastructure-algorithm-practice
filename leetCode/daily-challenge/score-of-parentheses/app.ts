function scoreOfParentheses(s: string): number {
  const total = new Array<number>(1).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "(" && s[i] !== ")") {
      total[total.length - 1] += parseInt(s[i]);
    } else if (s[i] === "(") {
      total.push(0);
    } else {
      const innerValue = total.pop() as number;
      total[total.length - 1] += innerValue !== 0 ? 2 * innerValue : 1;
    }
  }
  return total[0];
}

const input = "(34(72))";
const output = scoreOfParentheses(input);
console.log(output);

// Given a balanced parentheses string s, return the score of the string.

// The score of a balanced parentheses string is based on the following rule:

// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

// Example 1:

// Input: s = "()"
// Output: 1
// Example 2:

// Input: s = "(())"
// Output: 2
// Example 3:

// Input: s = "()()"
// Output: 2

// Constraints:

// 2 <= s.length <= 50
// s consists of only '(' and ')'.
// s is a balanced parentheses string.
