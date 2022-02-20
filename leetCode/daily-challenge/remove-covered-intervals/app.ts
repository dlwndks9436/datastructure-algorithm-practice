function removeCoveredIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]));
  let count = 0,
    cur = 0;
  for (let interval of intervals) {
    if (cur < interval[1]) {
      cur = interval[1];
      count++;
    }
  }
  return count;
}

const intervals = [
  [1, 4],
  [2, 3],
];
const output = removeCoveredIntervals(intervals);
console.log(output);

// Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list.

// The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.

// Return the number of remaining intervals.

// Example 1:

// Input: intervals = [[1,4],[3,6],[2,8]]
// Output: 2
// Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.
// Example 2:

// Input: intervals = [[1,4],[2,3]]
// Output: 1
