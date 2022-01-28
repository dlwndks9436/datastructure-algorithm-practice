const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let index = i;
    let minValue = array[index];
    for (let j = 0 + i; j < array.length; j++) {
      if (minValue > array[j]) {
        index = j;
        minValue = array[index];
      }
    }
    array[index] = array[i];
    array[i] = minValue;
  }
  return array;
}

const result = selectionSort(numbers);
console.log(result);
