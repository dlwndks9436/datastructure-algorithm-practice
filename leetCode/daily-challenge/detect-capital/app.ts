function detectCapitalUse(word: string): boolean {
  let firstLetterIsCapital: boolean | undefined;
  let remainderIsHigherCase: boolean | undefined;
  for (let i = 0; i < word.length; i++) {
    if (firstLetterIsCapital === undefined) {
      firstLetterIsCapital = word.charCodeAt(i) <= 90 ? true : false;
    } else if (firstLetterIsCapital) {
      if (remainderIsHigherCase === undefined) {
        remainderIsHigherCase = word.charCodeAt(i) <= 90 ? true : false;
      } else if (remainderIsHigherCase && word.charCodeAt(i) > 90) return false;
      else if (!remainderIsHigherCase && word.charCodeAt(i) <= 90) return false;
    } else {
      if (word.charCodeAt(i) <= 90) return false;
    }
  }
  return true;
}

const input = "ZZ";
const output = detectCapitalUse(input);
console.log(output);

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true

// Example 2:

// Input: word = "FlaG"
// Output: false
