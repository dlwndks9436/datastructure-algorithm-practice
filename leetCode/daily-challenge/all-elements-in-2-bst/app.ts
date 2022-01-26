//Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null
): number[] {
  const resultArr: number[] = new Array();

  const traverseNode = (rootNode: TreeNode) => {
    if (rootNode === null) return;
    resultArr.push(rootNode.val);
    if (rootNode.left !== null) traverseNode(rootNode.left);
    if (rootNode.right !== null) traverseNode(rootNode.right);
  };
  if (root1 !== null) traverseNode(root1);
  if (root2 !== null) traverseNode(root2);

  return resultArr.sort((a, b) => a - b);
}

// Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

// Example 1:

// Input: root1 = [2,1,4], root2 = [1,0,3]
// Output: [0,1,1,2,3,4]

// Example 2:

// Input: root1 = [1,null,8], root2 = [8,1]
// Output: [1,1,8,8]
