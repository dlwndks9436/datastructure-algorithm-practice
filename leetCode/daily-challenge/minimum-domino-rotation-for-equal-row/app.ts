function minDominoRotations(tops: number[], bottoms: number[]): number {
  let result = -1;
  let map = new Map<number, number>();
  let topMax: number | undefined;
  tops.forEach((top) => {
    map.set(top, (map.get(top) || 0) + 1);
    if (
      topMax === undefined ||
      (topMax !== top && map.get(top)! > map.get(topMax)!)
    ) {
      topMax = top;
    }
  });
  for (let i = 0; i < tops.length; i++) {
    if (tops[i] !== topMax && bottoms[i] !== topMax) {
      break;
    }
    if (i === tops.length - 1) {
      result = tops.length - map.get(topMax!)!;
    }
  }
  map = new Map<number, number>();
  let bottomMax: number | undefined;
  bottoms.forEach((bottom) => {
    map.set(bottom, (map.get(bottom) || 0) + 1);
    if (
      bottomMax === undefined ||
      (bottomMax !== bottom && map.get(bottom)! > map.get(bottomMax)!)
    ) {
      bottomMax = bottom;
    }
  });
  for (let i = 0; i < bottoms.length; i++) {
    if (tops[i] !== bottomMax && bottoms[i] !== bottomMax) {
      break;
    }
    if (i === tops.length - 1) {
      if (
        (result !== -1 && tops.length - map.get(bottomMax!)! < result) ||
        result === -1
      )
        result = tops.length - map.get(bottomMax!)!;
    }
  }

  return result;
}

const tops = [2, 1, 2, 4, 2, 2];
const bottoms = [5, 2, 6, 2, 3, 2];
const output = minDominoRotations(tops, bottoms);
console.log(output);

// In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

// Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

// If it cannot be done, return -1.

// Example 1:

// Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
// Output: 2
// Explanation:
// The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
// If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
// Example 2:

// Input: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
// Output: -1
// Explanation:
// In this case, it is not possible to rotate the dominoes to make one row of values equal.

// Constraints:

// 2 <= tops.length <= 2 * 104
// bottoms.length == tops.length
// 1 <= tops[i], bottoms[i] <= 6
