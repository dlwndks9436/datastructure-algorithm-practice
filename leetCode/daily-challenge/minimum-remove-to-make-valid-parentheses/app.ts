function minRemoveToMakeValid(s: string): string {
  const stack = new Array<number>();
  const validParentheses = new Map<number, boolean>();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")" && stack.length > 0) {
      validParentheses.set(stack.pop()!, true);
      validParentheses.set(i, true);
    }
  }
  let validString = new Array();
  for (let i = 0; i < s.length; i++) {
    if ((s[i] !== "(" && s[i] !== ")") || validParentheses.has(i)) {
      validString.push(s[i]);
    }
  }
  return validString.join("");
}

const input = "lee(t(c)o)de)";
const output = minRemoveToMakeValid(input);
console.log(output);

// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

// Constraints:

// 1 <= s.length <= 105
// s[i] is either'(' , ')', or lowercase English letter.
