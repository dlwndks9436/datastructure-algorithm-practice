function lastStoneWeight(stones: number[]): number {
  stones = stones.sort((a, b) => b - a);
  stones.unshift(0);
  while (stones.length > 2) {
    const stone1 = pop();
    const stone2 = pop();
    const diff = Math.abs(stone1 - stone2);
    push(diff);
  }
  return stones[1];

  function pop() {
    const max = stones[1];
    if (stones.length > 2) {
      stones[1] = stones.pop() as number;
    } else {
      stones.pop();
    }
    let currentIndex = 1;
    while (stones[currentIndex]) {
      const child1 = stones[currentIndex * 2] || 0;
      const child2 = stones[currentIndex * 2 + 1] || 0;
      const index = child1 > child2 ? currentIndex * 2 : currentIndex * 2 + 1;
      if (stones[index] > stones[currentIndex]) {
        const temp = stones[index];
        stones[index] = stones[currentIndex];
        stones[currentIndex] = temp;
        currentIndex = index;
      } else {
        break;
      }
    }
    return max;
  }

  function push(input: number) {
    stones.push(input);
    let currentIndex = stones.length - 1;
    while (currentIndex > 1) {
      const parent = Math.floor(currentIndex / 2);
      if (stones[parent] < stones[currentIndex]) {
        const temp = stones[parent];
        stones[parent] = stones[currentIndex];
        stones[currentIndex] = temp;
        currentIndex = parent;
      } else {
        break;
      }
    }
  }
}

const stones = [1];
const output = lastStoneWeight(stones);
console.log(output);

// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the smallest possible weight of the left stone. If there are no stones left, return 0.

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
// Example 2:

// Input: stones = [1]
// Output: 1

// Constraints:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000
