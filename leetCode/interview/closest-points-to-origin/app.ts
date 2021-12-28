function kClosest(points: number[][], k: number): number[][] {
  const result: number[][] = new Array();
  const square: number[][] = points.map((val, index) => {
    return [val[0] * val[0] + val[1] * val[1], index];
  });

  square.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i: number = 0; i < k; i++) {
    result.push(points[square[i][1]]);
  }
  return result;
}

const input: number[][] = [
  [3, 3],
  [5, -1],
  [-2, 4],
];

const output: number[][] = kClosest(input, 1);

console.log(output);

// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.
