function fibonacciRecursive() {
  const cache = {};
  return function calc(n) {
    if (cache[n]) {
      return cache[n];
    }
    if (n < 2) {
      return n;
    }
    cache[n] = calc(n - 1) + calc(n - 2);
    return cache[n];
  };
}

// const result = fibonacciIterative(4);
const fibonacci = fibonacciRecursive();
const result = fibonacci(50);

console.log(result);
