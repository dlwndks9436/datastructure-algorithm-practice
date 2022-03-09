// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const root = new ListNode(-1000, head);
  let pointer = root;
  let lastPositition = root;
  let previousVal = root.val;
  let currentVal: number;
  while (pointer?.next) {
    pointer = pointer.next;
    currentVal = pointer.val;
    if (previousVal !== currentVal) {
      if (!pointer.next || pointer?.next?.val !== currentVal) {
        lastPositition.next = pointer;
        lastPositition = lastPositition.next;
      } else {
        lastPositition.next = pointer.next;
      }
    } else {
      lastPositition.next = pointer.next;
    }
    previousVal = pointer.val;
  }
  return root.next;
}

const input = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5))))
    )
  )
);

// const input = new ListNode(
//   1,
//   new ListNode(
//     1,
//     new ListNode(
//       1,
//       new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4))))
//     )
//   )
// );

// const input = new ListNode(1, new ListNode(1));

const output = deleteDuplicates(input);
console.log(output);

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.
