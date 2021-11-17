function findFactorialRecursive(number) {
  // code here
  if (number > 1) {
    return number * findFactorialRecursive(--number);
  }

  return number;
}

function findFactorialIterative(number) {
  // code here
  let answer = 1;
  for (number; number > 1; number--) {
    answer *= number;
  }
  return answer;
}

const result = findFactorialRecursive(5);
console.log(result);
