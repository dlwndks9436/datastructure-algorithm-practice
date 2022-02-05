//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  const mergeTwoLists = (
    list1: ListNode | null,
    list2: ListNode | null
  ): ListNode => {
    let resultList: ListNode = new ListNode();
    let currentNode: ListNode | undefined = resultList;
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        currentNode.next = new ListNode(list1.val);
        list1 = list1.next;
        currentNode = currentNode?.next;
      } else {
        currentNode.next = new ListNode(list2.val);
        list2 = list2.next;
        currentNode = currentNode?.next;
      }
    }
    if (list1) {
      currentNode.next = list1;
    } else {
      currentNode.next = list2;
    }
    return resultList.next as ListNode;
  };

  while (lists.length > 1) {
    const list1 = lists.shift();
    const list2 = lists.shift();
    const mergedList = mergeTwoLists(list1!, list2!);
    lists.push(mergedList);
  }
  return lists[0];
}

const node1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const node2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const node3 = new ListNode(2, new ListNode(6));

const input = [node1, node2, node3];
const output = mergeKLists(input);
console.log(output);

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
