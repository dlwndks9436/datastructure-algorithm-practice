function twoSum(nums: number[], target: number): number[] {
  const storage: { [keys: number]: number[] } = {};
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const candidate: number = nums[i];
    if (!storage[candidate]) {
      storage[candidate] = [];
    }
    storage[candidate].push(i);
  }
  for (const prop in storage) {
    if (storage[prop] && storage[target - Number.parseInt(prop)]) {
      return [
        storage[prop].pop()!,
        storage[target - Number.parseInt(prop)].pop()!,
      ];
    }
  }
  return result;
}

const result: number[] = twoSum([-3, 4, 3, 90], 0);

console.log(result);

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]
