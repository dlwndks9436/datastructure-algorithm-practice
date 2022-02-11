function checkInclusion(s1: string, s2: string): boolean {
  const charMap = new Map<string, number>();

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    charMap.set(char, (charMap.get(char) as number) + 1 || 1);
  }

  let start = 0,
    end = 0;
  let matches = 0;

  const qtyOfFirstChar = charMap.get(s2[0]);
  if (qtyOfFirstChar !== undefined) {
    charMap.set(s2[0], qtyOfFirstChar - 1);
    if (qtyOfFirstChar > 0) {
      matches++;
      if (s1.length === 1) return true;
    }
  }

  while (end < s2.length) {
    if (end - start < s1.length - 1) {
      const qtyOfEndChar = charMap.get(s2[++end]);
      if (qtyOfEndChar !== undefined) {
        charMap.set(s2[end], qtyOfEndChar - 1);
        if (qtyOfEndChar > 0) {
          if (++matches === s1.length) return true;
        }
      }
    } else {
      const qtyOfStartChar = charMap.get(s2[start]);
      if (qtyOfStartChar !== undefined) {
        charMap.set(s2[start], qtyOfStartChar + 1);
        if (qtyOfStartChar >= 0) {
          matches--;
        }
      }
      start++;
    }
  }
  return false;
}

const s1 = "ab";
const s2 = "eidboaoo";
const output = checkInclusion(s1, s2);
console.log(output);

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
