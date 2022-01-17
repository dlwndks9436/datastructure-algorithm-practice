"use strict";
function wordPattern(pattern, s) {
    const arrayOfString = s.split(" ");
    if (arrayOfString.length !== pattern.length)
        return false;
    const Map = {};
    const stringMap = {};
    for (let i = 0; i < pattern.length; i++) {
        const patternVal = pattern[i];
        if (Map[patternVal] === undefined) {
            if (stringMap[arrayOfString[i]] === true)
                return false;
            Map[patternVal] = arrayOfString[i];
            stringMap[arrayOfString[i]] = true;
        }
        else {
            if (Map[patternVal] !== arrayOfString[i]) {
                return false;
            }
        }
    }
    return true;
}
const pattern = "aaa";
const s = "aa aa aa";
const output = wordPattern(pattern, s);
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
//# sourceMappingURL=app.js.map