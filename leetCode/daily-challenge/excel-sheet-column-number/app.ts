function titleToNumber(columnTitle: string): number {
  let sum = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    sum +=
      (columnTitle.charCodeAt(i) - 64) * 26 ** (columnTitle.length - 1 - i);
  }
  return sum;
}

const input = "AB";
const output = titleToNumber(input);
console.log(output);

// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701
