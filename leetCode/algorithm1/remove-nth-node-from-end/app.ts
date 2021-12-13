class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }

  let tempHead: ListNode | null = head;

  if (!tempHead.next) {
    return null;
  }

  let pointer: ListNode | null | undefined;

  do {} while (pointer?.next);

  tempHead.next = tempHead.next?.next!;

  return head;
}

// Input: (head = [1, 2, 3, 4, 5]), (n = 2);
// Output: [1, 2, 3, 5];

// Input: (head = [1]), (n = 1);
// Output: [];

// Input: (head = [1, 2]), (n = 1);
// Output: [1];
