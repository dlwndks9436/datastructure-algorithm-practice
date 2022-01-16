function addBinary(a: string, b: string): string {
  const maxlen: number = a.length > b.length ? a.length : b.length;
  let plusOne: boolean = false;
  let result: string;

  for (let i: number = 0; i < maxlen; i++) {
    const A: string = a[a.length - i - 1];
    const B: string = b[b.length - i - 1];

    if (A === "1" && B === "1") {
      if (plusOne) {
        result = i === 0 ? "1" : "1" + result!;
      } else {
        result = i === 0 ? "0" : "0" + result!;
      }
      plusOne = true;
    } else if (A === "1" || B === "1") {
      if (plusOne) {
        result = i === 0 ? "0" : "0" + result!;
        plusOne = true;
      } else {
        result = i === 0 ? "1" : "1" + result!;
        plusOne = false;
      }
    } else {
      if (plusOne) {
        result = i === 0 ? "1" : "1" + result!;
      } else {
        result = i === 0 ? "0" : "0" + result!;
      }
      plusOne = false;
    }
    if (i === maxlen - 1 && plusOne) {
      result = "1" + result;
    }
  }
  return result!;
}

const a: string = "10001";
const b: string = "1";

const output: string = addBinary(a, b);
console.log(output);

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
