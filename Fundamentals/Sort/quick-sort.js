const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  if (left >= right) return;
  let pivot = right;
  let process = left;
  while (process < pivot) {
    if (array[pivot] >= array[process]) {
      process++;
    } else if (array[pivot] < array[process]) {
      switchValues(array, process, pivot - 1);
      switchValues(array, pivot, pivot - 1);
      pivot--;
    }
  }

  console.log(array[pivot], pivot);
  console.log(array);
  quickSort(numbers, left, pivot - 1);
  quickSort(numbers, pivot + 1, right);
}

const switchValues = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);

console.log(numbers);
