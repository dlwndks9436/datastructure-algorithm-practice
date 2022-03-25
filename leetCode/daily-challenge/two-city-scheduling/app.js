"use strict";
function twoCitySchedCost(costs) {
    const heap = new Array(1);
    costs.forEach((cost, index) => {
        const diff = cost[0] - cost[1];
        insert([diff, index]);
    });
    let sum = 0;
    for (let i = 1; i <= costs.length; i++) {
        if (i > costs.length / 2) {
            sum += costs[pop()[1]][1];
        }
        else {
            sum += costs[pop()[1]][0];
        }
    }
    return sum;
    function insert(input) {
        heap.push(input);
        let pointer = heap.length - 1;
        while (Math.floor(pointer / 2) > 0) {
            if (heap[pointer][0] < heap[Math.floor(pointer / 2)][0]) {
                const temp = heap[pointer];
                heap[pointer] = heap[Math.floor(pointer / 2)];
                heap[Math.floor(pointer / 2)] = temp;
                pointer = Math.floor(pointer / 2);
            }
            else {
                break;
            }
        }
    }
    function pop() {
        let pointer = 1;
        const result = heap[1];
        heap[1] = heap[heap.length - 1];
        heap.pop();
        while (pointer * 2 <= heap.length - 1) {
            const left = heap[pointer * 2];
            const right = heap[pointer * 2 + 1];
            let newPointer;
            let min;
            if (right === undefined || left[0] < right[0]) {
                min = left;
                newPointer = pointer * 2;
            }
            else {
                min = right;
                newPointer = pointer * 2 + 1;
            }
            if (min[0] < heap[pointer][0]) {
                const temp = min;
                heap[newPointer] = heap[pointer];
                heap[pointer] = temp;
                pointer = newPointer;
            }
            else {
                break;
            }
        }
        return result;
    }
}
const cost = [
    [515, 563],
    [451, 713],
    [537, 709],
    [343, 819],
    [855, 779],
    [457, 60],
    [650, 359],
    [631, 42],
];
const output = twoCitySchedCost(cost);
console.log(output);
// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.
// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
// Example 1:
// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation:
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.
// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
// Example 2:
// Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
// Output: 1859
// Example 3:
// Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
// Output: 3086
// Constraints:
// 2 * n == costs.length
// 2 <= costs.length <= 100
// costs.length is even.
// 1 <= aCosti, bCosti <= 1000
//# sourceMappingURL=app.js.map