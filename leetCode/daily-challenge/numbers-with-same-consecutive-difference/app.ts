function numsSameConsecDiff(n: number, k: number): number[] {
  let results = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 1; i < n; i++) {
    const temp = new Array<string>();
    while (results.length > 0) {
      const fullNum = results.pop() as string;
      const num = fullNum[fullNum.length - 1];
      const int = Number(num);
      if (k === 0) {
        const str = fullNum + num;
        temp.push(str);
      } else {
        if (int + k < 10) {
          const next = int + k;
          const str = fullNum + next;
          temp.push(str);
        }
        if (int - k >= 0) {
          const next = int - k;
          const str = fullNum + next;
          temp.push(str);
        }
      }
    }
    results = temp;
  }
  return results.map((val) => Number(val));
}

const output = numsSameConsecDiff(3, 7);
console.log(output);

// Return all non-negative integers of length n such that the absolute difference between every two consecutive digits is k.

// Note that every number in the answer must not have leading zeros. For example, 01 has one leading zero and is invalid.

// You may return the answer in any order.

// Example 1:

// Input: n = 3, k = 7
// Output: [181,292,707,818,929]
// Explanation: Note that 070 is not a valid number, because it has leading zeroes.
// Example 2:

// Input: n = 2, k = 1
// Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]

// Constraints:

// 2 <= n <= 9
// 0 <= k <= 9
