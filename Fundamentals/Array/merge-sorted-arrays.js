// 1. check if types of input arrays are integer
// if it is not integer, return 'must be integer'
// if it is integer, proceed next process
// 2. if one of the arrays are empty, then merge the remaining array
// 3. insert the smaller value of array when index is 0;
// 4. repeat until inputs are empty;

const isArrayOfIntegers = (array) => {
  if (!Array.isArray(array)) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (!Number.isInteger(array[i])) return false;
  }
  return true;
};

const mergeSortedArrays = (arr1, arr2) => {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  if (!isArrayOfIntegers(arr1) || !isArrayOfIntegers(arr2)) {
    return "Inputs must be arrays of integers";
  }
  let firstValueOfArray1 = arr1[i];
  let firstValueOfArray2 = arr2[j];
  while (firstValueOfArray1 || firstValueOfArray2) {
    if (!firstValueOfArray1) {
      const remainder = arr2.slice(j);
      return mergedArray.concat(remainder);
    } else if (!firstValueOfArray2) {
      const remainder = arr1.slice(j);
      return mergedArray.concat(remainder);
    } else {
      if (firstValueOfArray1 <= firstValueOfArray2) {
        mergedArray.push(firstValueOfArray1);
        i++;
        firstValueOfArray1 = arr1[i];
      } else {
        mergedArray.push(firstValueOfArray2);
        j++;
        firstValueOfArray2 = arr2[j];
      }
    }
  }
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6, 8, 10];

const result = mergeSortedArrays(array1, array2);

console.log(result);
