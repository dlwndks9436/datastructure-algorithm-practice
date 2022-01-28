// var twoSum = function (nums, target) {
//   if (target % 2 === 0) {
//     const candidate = [];
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === target / 2) {
//         candidate.push(i);
//         console.log(candidate);
//       }
//     }
//     if (candidate.length > 1) {
//       console.log("first solution");
//       const value1 = candidate.pop();
//       const value2 = candidate.pop();
//       if (value1 < value2) {
//         return [value1, value2];
//       } else {
//         return [value2, value1];
//       }
//     }
//   }

//   const candidate = new Array(target + 1);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] <= target) {
//       let value = nums[i];
//       candidate[value] = i;
//     }
//   }
//   console.log(candidate);
//   for (let i = 0; i < target / 2; i++) {
//     console.log(i, target - i);
//     if (
//       Number.isInteger(candidate[i]) &&
//       Number.isInteger(candidate[target - i])
//     ) {
//       // return [candidate[i], candidate[nums.length-1-i]]
//       return [candidate[i], candidate[target - i]];
//     }
//   }
// };

var twoSum = function (nums, target) {
  if (target % 2 === 0) {
    const indicies = [];
    let index = nums.indexOf(target / 2);
    while (index !== -1) {
      indicies.push(index);
      index = nums.indexOf(target / 2, index + 1);
    }
    if (indicies.length > 1) {
      console.log("first");
      return indicies;
    }
  }

  const range = {};
  for (let i = 0; i < nums.length; i++) {
    range[nums[i]] = i;
  }
  const result = nums.filter(
    (num) => nums.includes(target - num) && num !== target / 2
  );
  const firstValue = range[result.pop()];
  const secondValue = range[result.pop()];
  console.log("second");
  if (firstValue <= secondValue) {
    return [firstValue, secondValue];
  } else {
    return [secondValue, firstValue];
  }
};

const nums = [-1, -2, -3, -4, -5];
const target = -8;

const result = twoSum(nums, target);
console.log(result);
