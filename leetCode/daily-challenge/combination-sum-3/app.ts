function combinationSum3(k: number, n: number): number[][] {
  const result = new Array<number[]>();
  checkValid(0, []);
  return result;
  function checkValid(sum: number, com: number[]) {
    const candidate = com.length > 0 ? com[com.length - 1] + 1 : 1;
    for (let i = candidate; i < 10; i++) {
      const shortage = n - sum - i;
      const remainFreq = k - com.length - 1;
      if (remainFreq === 0) {
        if (shortage === 0) {
          result.push([...com, i]);
        }
      } else if (
        arithmetic(i + 1, remainFreq) <= shortage &&
        shortage <= arithmetic(10 - remainFreq, remainFreq)
      ) {
        checkValid(sum + i, [...com, i]);
      }
    }
  }

  function arithmetic(start: number, freq: number) {
    let sum = 0;
    for (let i = 0; i < freq; i++) {
      sum += start++;
    }
    return sum;
  }
}

const k = 3,
  n = 15;
const output = combinationSum3(k, n);
console.log(output);

// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.
// Example 3:

// Input: k = 4, n = 1
// Output: []
// Explanation: There are no valid combinations.
// Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.

// Constraints:

// 2 <= k <= 9
// 1 <= n <= 60
