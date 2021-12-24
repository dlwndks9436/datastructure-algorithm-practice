function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [intervals[0]];
  for (let i: number = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] =
        result[result.length - 1][1] > intervals[i][1]
          ? result[result.length - 1][1]
          : intervals[i][1];
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}

const input: number[][] = [
  [1, 4],
  [0, 4],
];

const output = merge(input);
console.log(output);

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
