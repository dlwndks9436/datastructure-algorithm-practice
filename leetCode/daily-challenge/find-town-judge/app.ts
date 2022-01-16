function findJudge(n: number, trust: number[][]): number {
  const candidate: number[] = new Array(n + 1).fill(0);

  for (let i: number = 0; i < trust.length; i++) {
    candidate[trust[i][0]] = -1;
    if (candidate[trust[i][1]] !== -1) {
      candidate[trust[i][1]]++;
    }
  }
  for (let i: number = 1; i <= n; i++) {
    if (candidate[i] === n - 1) {
      return i;
    }
  }
  return -1;
}

const n: number = 3;
const trust: number[][] = [
  [1, 3],
  [2, 3],
  [3, 1],
];

const output = findJudge(n, trust);
console.log(output);

// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.
// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Example 1:

// Input: n = 2, trust = [[1,2]]
// Output: 2
// Example 2:

// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:

// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1
