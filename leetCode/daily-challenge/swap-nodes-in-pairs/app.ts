//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let node1 = head,
    node2 = head.next;

  const node3 = node2.next;
  node2.next = node1;
  node1.next = swapPairs(node3);

  return node2;
}

// function swapPairs(head: ListNode | null): ListNode | null {
//   if (!head) return null;
//   let initialNode = head;
//   let previousNode: ListNode | null | undefined;
//   let firstNode: ListNode | null = head;
//   let secondNode: ListNode | null = head.next;
//   while (firstNode !== null && secondNode !== null) {
//     const nextNode = secondNode.next;
//     secondNode.next = firstNode;
//     secondNode.next!.next = nextNode;
//     if (previousNode) {
//       previousNode.next = secondNode;
//     } else {
//       initialNode = secondNode;
//     }
//     previousNode = secondNode.next;
//     firstNode = nextNode;
//     if (firstNode) secondNode = firstNode.next;
//   }
//   return initialNode;
// };

const input = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);

const output = swapPairs(input);
console.log(output);

// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:

// Input: head = []
// Output: []

// Example 3:

// Input: head = [1]
// Output: [1]
