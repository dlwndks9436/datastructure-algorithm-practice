const firstRecurringCharacterOf = (array) => {
  const inventory = {};
  for (let i = 0; i < array.length; i++) {
    console.log(inventory);
    let valueOfArray = array[i];
    if (!inventory[valueOfArray]) {
      inventory[valueOfArray] = true;
    } else {
      return valueOfArray;
    }
  }
  return undefined;
};

const firstRecurringCharacterOf2 = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] === array[j]) {
        return array[j];
      }
    }
  }
  return undefined;
};

const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [1, 1];

const result = firstRecurringCharacterOf(array);
// const result = firstRecurringCharacterOf2(array2);

console.log(result);
