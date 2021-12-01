"use strict";
function twoSum(numbers, target) {
    let index1 = 1;
    let index2 = numbers.length;
    while (index1 !== index2) {
        if (numbers[index1 - 1] + numbers[index2 - 1] === target) {
            break;
        }
        if (numbers[index1 - 1] + numbers[index2 - 1] > target) {
            index2--;
        }
        else if (numbers[index1 - 1] + numbers[index2 - 1] < target) {
            index1++;
        }
    }
    return [index1, index2];
}
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
//# sourceMappingURL=app.js.map