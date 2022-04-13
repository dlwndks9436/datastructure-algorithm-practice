function generateMatrix(n: number): number[][] {
  let count = 1;
  let size = n - 1;
  let turn = 1;
  let direction: "down" | "up" | "left" | "right" = "down";
  const result = new Array<number[]>(n).fill([]).map((value, index) => {
    if (index === 0) {
      const array = new Array<number>();
      while (count <= n) {
        array.push(count++);
      }
      return array;
    }
    return new Array<number>(n);
  });
  const currentPosition = [0, n - 1];
  while (size > 0) {
    if (direction === "down") {
      for (let i = 0; i < size; i++) {
        currentPosition[0] += 1;
        result[currentPosition[0]][currentPosition[1]] = count++;
      }
    } else if (direction === "up") {
      for (let i = 0; i < size; i++) {
        currentPosition[0] -= 1;
        result[currentPosition[0]][currentPosition[1]] = count++;
      }
    } else if (direction === "left") {
      for (let i = 0; i < size; i++) {
        currentPosition[1] -= 1;
        result[currentPosition[0]][currentPosition[1]] = count++;
      }
    } else {
      for (let i = 0; i < size; i++) {
        currentPosition[1] += 1;
        result[currentPosition[0]][currentPosition[1]] = count++;
      }
    }
    if (turn === 1) {
      turn = 2;
    } else if (turn === 2) {
      turn = 1;
      size--;
    }

    if (direction === "down") {
      direction = "left";
    } else if (direction === "left") {
      direction = "up";
    } else if (direction === "up") {
      direction = "right";
    } else {
      direction = "down";
    }
  }
  return result;
}

const input = 3;
const output = generateMatrix(input);
console.log(output);

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:

// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]

// Constraints:

// 1 <= n <= 20
