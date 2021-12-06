function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const rows: number = mat.length;
  const column: number = mat[0].length;

  if (rows * column !== r * c) {
    return mat;
  }

  let rowPointerOfMat: number = 0;
  let columnPointerOfMat: number = 0;

  const result: number[][] = new Array();
  let temp: number[] = new Array();

  for (let i: number = 0; i < rows * column; i++) {
    temp.push(mat[rowPointerOfMat][columnPointerOfMat++]);
    if ((i + 1) % c === 0) {
      result.push(temp);
      temp = new Array();
    }
    if (columnPointerOfMat === column) {
      columnPointerOfMat = 0;
      rowPointerOfMat++;
    }
  }
  return result;
}

const input: number[][] = [
  [1, 2],
  [3, 4],
];

const output = matrixReshape(input, 2, 4);
console.log(output);

// Example 1:
// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Example 2:
// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]
