function rotate(matrix: number[][]): void {
  const length = matrix[0].length;
  for (let i = 0; i <= length / 2; i++) {
    for (let j = 0; j < length - 1 - 2 * i; j++) {
      let temp1, temp2: number;
      temp1 = matrix[i + j][length - 1 - i];
      matrix[i + j][length - 1 - i] = matrix[i][i + j];
      temp2 = matrix[length - 1 - i][length - 1 - i - j];
      matrix[length - 1 - i][length - 1 - i - j] = temp1;
      temp1 = temp2;
      temp2 = matrix[length - 1 - i - j][i];
      matrix[length - 1 - i - j][i] = temp1;
      matrix[i][i + j] = temp2;
    }
  }
}

const input = [
  [1, 2],
  [3, 4],
];

rotate(input);

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000
