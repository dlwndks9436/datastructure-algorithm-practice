function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }
  const map: { [key: string]: string[] } = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  let result: string[] = map[digits[0]];
  for (let i = 1; i < digits.length; i++) {
    const currentResult = [...result];
    const newResult = [];
    const length = map[digits[i]].length;
    while (currentResult.length > 0) {
      const currentString = currentResult.pop();
      for (let j = 0; j < length; j++) {
        newResult.push(currentString + map[digits[i]][j]);
      }
    }
    result = newResult;
  }
  return result;
}

const digits = "2753";
const output = letterCombinations(digits);
console.log(output);

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].
