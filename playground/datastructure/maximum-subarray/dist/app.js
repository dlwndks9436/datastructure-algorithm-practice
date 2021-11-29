"use strict";
function maxSubArray(nums) {
    let total = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        total += nums[i];
        if (nums[i] > total) {
            total = nums[i];
        }
        if (total > max) {
            max = total;
        }
    }
    return max;
}
const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Input: nums = [1];
// Output: 1;
// Input: nums = [5, 4, -1, 7, 8];
// Output: 23;
