const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const indexOfCenter = Math.floor(array.length / 2);
  const left = new Array();
  const right = new Array();
  for (let i = 0; i < indexOfCenter; i++) {
    left.push(array[i]);
  }
  for (let i = indexOfCenter; i < array.length; i++) {
    right.push(array[i]);
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = new Array();
  let indexOfLeft = 0;
  let indexOfRight = 0;
  while (indexOfLeft < left.length && indexOfRight < right.length) {
    if (left[indexOfLeft] <= right[indexOfRight]) {
      result.push(left[indexOfLeft]);
      indexOfLeft++;
    } else {
      result.push(right[indexOfRight]);
      indexOfRight++;
    }
  }
  return result.concat(left.slice(indexOfLeft), right.slice(indexOfRight));
}

const answer = mergeSort(numbers);
console.log(answer);
