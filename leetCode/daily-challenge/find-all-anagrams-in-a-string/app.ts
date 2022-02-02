function findAnagrams(s: string, p: string): number[] {
  const result = new Array();
  let left = 0,
    right = 0;
  let count = p.length;
  const chars: { [key: string]: number } = {};

  for (const char of p) {
    chars[char] !== undefined ? chars[char]++ : (chars[char] = 1);
  }
  while (right < s.length) {
    if (chars[s[right]] > 0) {
      count--;
    }
    chars[s[right]]--;
    right++;
    if (count === 0) result.push(left);

    if (right - left === p.length) {
      if (chars[s[left]] >= 0) {
        count++;
      }
      chars[s[left]]++;
      left++;
    }
  }
  return result;
}

const s = "cbaebabacd";
const p = "abc";
const output = findAnagrams(s, p);
console.log(output);

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
