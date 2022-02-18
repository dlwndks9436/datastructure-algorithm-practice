function removeKdigits(num: string, k: number): string {
  const stack = new Array();
  let removed = 0;
  for (const n of num) {
    while (stack.length && n < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed += 1;
    }
    stack.push(n);
  }

  while (removed < k) {
    stack.pop();
    removed++;
  }

  while (stack.length && stack[0] === "0") {
    stack.shift();
  }

  return stack.join("") || "0";
}

const num = "1000112300004";
const k = 5;
const output = removeKdigits(num, k);
console.log(output);

// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.
