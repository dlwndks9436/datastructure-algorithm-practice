"use strict";
function generate(numRows) {
    const result = new Array();
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            result.push([1]);
        }
        else {
            let temp = new Array();
            for (let j = 0; j <= i; j++) {
                let first = result[i - 1][j - 1];
                let second = result[i - 1][j];
                if (!first) {
                    first = 0;
                }
                if (!second) {
                    second = 0;
                }
                temp.push(first + second);
            }
            result.push(temp);
        }
    }
    return result;
}
const output = generate(5);
console.log(output);
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]
//# sourceMappingURL=app.js.map