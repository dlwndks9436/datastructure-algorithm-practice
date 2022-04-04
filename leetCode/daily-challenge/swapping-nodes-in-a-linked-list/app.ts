//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;
  let pointer1 = head;
  for (let i = 1; i < k; i++) {
    if (!pointer1.next) return head;
    pointer1 = pointer1.next;
  }
  let pointer2: ListNode | null = head;
  let offset: ListNode | null = pointer2;
  for (let i = 0; i < k; i++) {
    offset = offset!.next;
  }
  while (offset) {
    pointer2 = pointer2!.next;
    offset = offset.next;
  }
  const temp = pointer1.val;
  pointer1.val = pointer2!.val;
  pointer2!.val = temp;
  return head;
}

const head = new ListNode(100, new ListNode(90));
const k = 2;
const output = swapNodes(head, k);
console.log(output);

// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 105
// 0 <= Node.val <= 100
