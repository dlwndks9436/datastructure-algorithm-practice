"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    for (let i = 0; i < k; i++) {
        const temp = nums[nums.length - 1];
        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = temp;
    }
}
const array = [-1];
const control = 2;
rotate(array, control);
console.log(array);
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
// Follow up:
//     Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
//     Could you do it in-place with O(1) extra space?
//# sourceMappingURL=app.js.map