function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      break;
    }
    left++;
    right--;
  }
  if (left < right) {
    let newLeft = left + 1;
    let newRight = right;
    while (newLeft < newRight) {
      if (s[newLeft] !== s[newRight]) {
        break;
      }
      newLeft++;
      newRight--;
    }
    if (newLeft >= newRight) {
      return true;
    }
    newLeft = left;
    newRight = right - 1;
    while (newLeft < newRight) {
      if (s[newLeft] !== s[newRight]) {
        break;
      }
      newLeft++;
      newRight--;
    }
    if (newLeft >= newRight) {
      return true;
    }
  }
  if (left >= right) {
    return true;
  } else {
    return false;
  }
}

const s = "abc";
const output = validPalindrome(s);
console.log(output);

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
