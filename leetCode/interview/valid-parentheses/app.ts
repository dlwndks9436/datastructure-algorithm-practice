function isValid(s: string): boolean {
  let stack: Array<string> = new Array();
  for (let i: number = 0; i < s.length; i++) {
    if (
      stack.length > 0 &&
      s[i].charCodeAt(0) - stack[stack.length - 1].charCodeAt(0) < 3 &&
      s[i].charCodeAt(0) - stack[stack.length - 1].charCodeAt(0) > 0
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length > 0 ? false : true;
}

const input: string = "{[]}";
const output: boolean = isValid(input);
console.log(output);

// Input: s = "()";
// Output: true;

// Input: s = "()[]{}";
// Output: true;

// Input: s = "(]";
// Output: false;

// Input: s = "([)]";
// Output: false;

// Input: s = "{[]}";
// Output: true;
