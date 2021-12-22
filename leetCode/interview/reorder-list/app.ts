// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (head !== null) {
    let pointer: ListNode | null = head;
    const previousNodes: ListNode[] = new Array();
    while (pointer) {
      previousNodes.push(pointer);
      pointer = pointer.next;
    }
    for (
      let i: number = 0;
      i < Math.floor((previousNodes.length + 1) / 2);
      i++
    ) {
      if (i === 0) {
        pointer = head;
      } else {
        const temp: ListNode = pointer!.next!;
        pointer!.next = previousNodes[previousNodes.length - i];
        pointer = pointer!.next;
        pointer.next = temp;
        pointer = pointer.next;
      }
    }
    if (previousNodes.length % 2 === 0) {
      pointer!.next!.next = null;
    } else {
      pointer!.next = null;
    }
  }
}

const input: ListNode = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))
  )
);

reorderList(input);

// Input: head = [1, 2, 3, 4];
// Output: [1, 4, 2, 3];

// Input: head = [1, 2, 3, 4, 5];
// Output: [1, 5, 2, 4, 3];
