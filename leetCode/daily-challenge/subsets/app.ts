function subsets(nums: number[]): number[][] {
  const subsetArray: number[][] = [[]];

  const getSubsets = (subset: number[], numbers: number[]) => {
    while (numbers.length > 0) {
      const newSubset = Array.from(subset);
      newSubset.push(numbers.pop()!);
      subsetArray.push(newSubset);
      getSubsets(newSubset, Array.from(numbers));
    }
  };

  getSubsets([], nums);
  return subsetArray;
}

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const output = subsets(nums);
console.log(output);

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
