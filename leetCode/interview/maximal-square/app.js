"use strict";
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
function maximalSquare(matrix) {
    const minLength = matrix.length > matrix[0].length ? matrix[0].length : matrix.length;
    let area = 0;
    let exists = false;
    let candidate = new Array();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === "1") {
                candidate.push([i, j]);
                exists = true;
            }
        }
    }
    if (exists) {
        area++;
    }
    for (let i = 0; i < minLength; i++) {
        candidate = candidate.filter((element) => {
            let isSquare = true;
            for (let j = 0; j <= area; j++) {
                if (!isSquare)
                    break;
                for (let k = 0; k <= area; k++) {
                    if (!matrix[element[0] + j] ||
                        (matrix[element[0] + j] &&
                            matrix[element[0] + j][element[1] + k] !== "1")) {
                        isSquare = false;
                        break;
                    }
                }
            }
            return isSquare;
        });
        if (candidate.length > 0) {
            area++;
        }
        else {
            break;
        }
    }
    return area * area;
}
const input = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
];
const output = maximalSquare(input);
console.log(output);
// Input: matrix = [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];
// Output: 4;
// Input: matrix = [
//   ["0", "1"],
//   ["1", "0"],
// ];
// Output: 1;
// Input: matrix = [["0"]];
// Output: 0;
//# sourceMappingURL=app.js.map