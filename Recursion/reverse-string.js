//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if (str) {
    return str[str.length - 1] + reverseString(str.slice(0, -1));
  }
  return "";
}

const result = reverseString("yoyo mastery");
console.log(result);
//should return: 'yretsam oyoy'
