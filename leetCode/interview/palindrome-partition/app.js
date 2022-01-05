"use strict";
function partition(s) {
    const result = [];
    function isPalindrome(str) {
        return str === str.split("").reverse().join("");
    }
    function findPalindrome(start, partitions) {
        if (start === s.length) {
            result.push([...partitions]);
            return;
        }
        for (let i = start + 1; i <= s.length; i++) {
            const candidate = s.substring(start, i);
            if (isPalindrome(candidate)) {
                partitions.push(candidate);
                findPalindrome(i, partitions);
                partitions.pop();
            }
        }
    }
    findPalindrome(0, []);
    return result;
}
const input = "aab";
const output = partition(input);
console.log(output);
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
// A palindrome string is a string that reads the same backward as forward.
// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:
// Input: s = "a"
// Output: [["a"]]
//# sourceMappingURL=app.js.map