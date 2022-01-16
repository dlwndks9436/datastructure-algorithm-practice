// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class Solution {
  arr: number[];
  node: ListNode | null;
  constructor(head: ListNode | null) {
    this.node = head;
    this.arr = new Array();
    while (this.node) {
      this.arr.push(this.node.val);
      this.node = this.node.next;
    }
  }

  getRandom(): number {
    const index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
  }
}

const list = new ListNode(1, new ListNode(2, new ListNode(3, null)));

const sol = new Solution(list);
console.log(sol.getRandom());

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

// Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.
// Implement the Solution class:
// Solution(ListNode head) Initializes the object with the integer array nums.
// int getRandom() Chooses a node randomly from t

// Example 1:

// Input
// ["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
// [[[1, 2, 3]], [], [], [], [], []]
// Output
// [null, 1, 3, 2, 2, 3]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.getRandom(); // return 1
// solution.getRandom(); // return 3
// solution.getRandom(); // return 2
// solution.getRandom(); // return 2
// solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
