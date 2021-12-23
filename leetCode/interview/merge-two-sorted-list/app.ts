// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) {
    return null;
  }
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  if (list1.val <= list2.val) {
    return mergeMinValueToList(list1.next, list2, new ListNode(list1.val));
  } else {
    return mergeMinValueToList(list1, list2.next, new ListNode(list2.val));
  }
}

function mergeMinValueToList(
  node1: ListNode | null,
  node2: ListNode | null,
  result: ListNode
): ListNode | null {
  if (!node1) {
    result.next = node2;
    return result;
  }
  if (!node2) {
    result.next = node1;
    return result;
  }
  if (node1!.val <= node2!.val) {
    result.next = new ListNode(node1!.val);
    node1 = node1!.next;
  } else {
    result.next = new ListNode(node2!.val);
    node2 = node2!.next;
  }
  mergeMinValueToList(node1, node2, result.next);
  return result;
}

// Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
// Output: [1, 1, 2, 3, 4, 4];

// Input: (list1 = []), (list2 = []);
// Output: [];

// Input: (list1 = []), (list2 = [0]);
// Output: [0];
