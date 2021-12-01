"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let quantityOfZeroes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            quantityOfZeroes++;
        }
        else {
            nums[i - quantityOfZeroes] = nums[i];
        }
    }
    for (let i = nums.length - 1; i > nums.length - 1 - quantityOfZeroes; i--) {
        nums[i] = 0;
    }
}
const input = [0];
moveZeroes(input);
console.log(input);
// Input: nums = [0, 1, 0, 3, 12];
// Output: [1, 3, 12, 0, 0];
// Input: nums = [0];
// Output: [0];
//# sourceMappingURL=app.js.map