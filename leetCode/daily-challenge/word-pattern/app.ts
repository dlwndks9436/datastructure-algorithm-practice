function wordPattern(pattern: string, s: string): boolean {
  const arrayOfString: string[] = s.split(" ");
  if (arrayOfString.length !== pattern.length) return false;
  const Map: { [key: string]: string } = {};
  const stringMap: { [key: string]: boolean } = {};
  for (let i: number = 0; i < pattern.length; i++) {
    const patternVal: string = pattern[i];
    if (Map[patternVal] === undefined) {
      if (stringMap[arrayOfString[i]] === true) return false;
      Map[patternVal] = arrayOfString[i];
      stringMap[arrayOfString[i]] = true;
    } else {
      if (Map[patternVal] !== arrayOfString[i]) {
        return false;
      }
    }
  }
  return true;
}

const pattern: string = "aaa";
const s: string = "aa aa aa";
const output: boolean = wordPattern(pattern, s);
console.log(output);

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat dog dog"
// Output: false
