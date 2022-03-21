function partitionLabels(s: string): number[] {
  const map = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    const prev = map.get(s[i]);
    if (prev) {
      map.set(s[i], [...prev, i]);
    } else {
      map.set(s[i], [i]);
    }
  }
  let pointer = 0;
  const result = [];
  while (pointer < s.length) {
    const lastIndex = findLastIndex(pointer);
    result.push(lastIndex - pointer + 1);
    pointer = lastIndex + 1;
  }
  return result;
  function findLastIndex(start: number): number {
    let max = start;
    for (let i = start; i <= max; i++) {
      const indexs = map.get(s[i]) as number[];
      max = Math.max(indexs[indexs.length - 1], max);
    }
    return max;
  }
}

const input = "eccbbbbdec";
const output = partitionLabels(input);
console.log(output);

// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.
