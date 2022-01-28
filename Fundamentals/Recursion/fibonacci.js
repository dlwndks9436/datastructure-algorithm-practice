function fibonacciIterative(n) {
  if (n < 2) {
    return n;
  }
  let answer = 1;
  let previousValue = 0;
  let temp;
  for (let i = 2; i <= n; i++) {
    temp = answer;
    answer += previousValue;
    previousValue = temp;
  }
  return answer;
}

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// const result = fibonacciIterative(4);
const result = fibonacciRecursive(0);

console.log(result);
