const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort1(array) {
  const result = new Array();
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      result.push(array[0]);
    } else {
      for (let j = 0; j < i; j++) {
        if (array[i] < result[j]) {
          result.splice(j, 0, array[i]);
          break;
        }
        if (j === i - 1) {
          result.push(array[i]);
        }
      }
    }
  }
  return result;
}

function insertionSort2(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        array.splice(j, 0, array.splice(i, 1)[0]);
        break;
      }
      if (j === i - 1) {
        array.splice(j + 1, 0, array.splice(i, 1)[0]);
      }
    }
  }
  return array;
}

// const result = insertionSort1(numbers);
const result = insertionSort2(numbers);
console.log(numbers);
