// function strStr(haystack: string, needle: string): number {
//   if (needle === "") return 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//       for (let j = 0; j < needle.length; j++) {
//         if (haystack[i + j] !== needle[j]) break;
//         if (j === needle.length - 1) {
//           return i;
//         }
//       }
//     }
//   }
//   return -1;
// }

function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;
  const lps: number[] = new Array(needle.length).fill(0);
  let count: number = 0;
  for (let i: number = 1; i < lps.length; ) {
    if (needle[i] === needle[count]) {
      lps[i++] = ++count;
    } else {
      if (count === 0) {
        i++;
      } else {
        count = lps[count - 1];
      }
    }
  }
  count = 0;
  for (let i: number = 0; i < haystack.length; ) {
    if (haystack[i] === needle[count]) {
      count++, i++;
      if (count === needle.length) {
        return i - needle.length;
      }
    } else {
      if (count === 0) {
        i++;
      } else {
        count = lps[count - 1];
      }
    }
  }
  return -1;
}

const haystack: string = "mississippi";
const needle: string = "issip";
const output: number = strStr(haystack, needle);
console.log(output);

// Input: (haystack = "hello"), (needle = "ll");
// Output: 2;

// Input: (haystack = "aaaaa"), (needle = "bba");
// Output: -1;

// Input: (haystack = ""), (needle = "");
// Output: 0;
