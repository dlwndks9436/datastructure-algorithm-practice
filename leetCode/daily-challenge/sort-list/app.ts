//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  while (fast.next?.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  let middle = slow.next;
  slow.next = null;

  return mergeList(sortList(head), sortList(middle));

  function mergeList(first: ListNode | null, second: ListNode | null) {
    const root = new ListNode();
    let pointer = root;
    while (first && second) {
      if (first.val < second.val) {
        pointer.next = first;
        first = first.next;
      } else {
        pointer.next = second;
        second = second.next;
      }
      pointer = pointer.next;
    }
    if (!first) {
      pointer.next = second;
    }
    if (!second) {
      pointer.next = first;
    }
    return root.next;
  }
}

const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
const output = sortList(head);
console.log(output);

// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105
