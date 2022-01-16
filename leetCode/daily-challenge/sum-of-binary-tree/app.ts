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

function sumRootToLeaf(root: TreeNode | null): number {
  if (!root) return 0;
  const calc = (node: TreeNode | null, currentVal: string): number => {
    if (!node) {
      return 0;
    }
    currentVal = currentVal + node.val;
    if (!node.left && !node.right) {
      return parseInt(currentVal, 2);
    }

    return calc(node.left, currentVal) + calc(node.right, currentVal);
  };
  return calc(root, "");
}

const input: TreeNode = new TreeNode(
  1,
  new TreeNode(0, new TreeNode(0, null, null), new TreeNode(1, null, null)),
  new TreeNode(1, new TreeNode(0, null, null), new TreeNode(1, null, null))
);

const input2: TreeNode = new TreeNode(0, null, null);

const output: number = sumRootToLeaf(null);
console.log(output);

// You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

// The test cases are generated so that the answer fits in a 32-bits integer.

// Example 1:

// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
// Example 2:

// Input: root = [0]
// Output: 0
