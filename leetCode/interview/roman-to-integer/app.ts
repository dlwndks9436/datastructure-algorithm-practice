function romanToInt(s: string): number {
  const table: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    if (table[s[i + 1]] > table[s[i]]) {
      result += table[s[i + 1]] - table[s[i++]];
    } else {
      result += table[s[i]];
    }
  }
  return result;
}

const input: string = "MCMXCIV";
const output: number = romanToInt(input);

console.log(output);

// Input: s = "III";
// Output: 3;

// Input: s = "IV";
// Output: 4;
