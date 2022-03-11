//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  const arr = new Array<ListNode>();
  let pointer = head;
  while (pointer) {
    arr.push(pointer);
    pointer = pointer.next;
  }
  const rotate = k % arr.length;
  if (rotate !== 0 && arr.length > 0) {
    const realHead = arr.length - rotate;
    arr[realHead - 1].next = null;
    arr[arr.length - 1].next = head;
    head = arr[realHead];
  }
  return head;
}

const input = new ListNode(1);
const output = rotateRight(input, 4);
console.log(output);

// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109
