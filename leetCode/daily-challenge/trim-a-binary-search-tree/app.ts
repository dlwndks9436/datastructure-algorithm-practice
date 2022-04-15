// Definition for a binary tree node.
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

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) return null;
  if (root.val < low) {
    return trimBST(root.right, low, high);
  } else if (root.val > high) {
    return trimBST(root.left, low, high);
  } else {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
  }
}

const root = new TreeNode(
  3,
  new TreeNode(0, null, new TreeNode(2, new TreeNode(1), null)),
  new TreeNode(4)
);
const output = trimBST(root, 1, 3);

console.log(output);

// Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.

// Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.

// Example 1:

// Input: root = [1,0,2], low = 1, high = 2
// Output: [1,null,2]
// Example 2:

// Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
// Output: [3,2,null,1]

// Constraints:

// The number of nodes in the tree in the range [1, 104].
// 0 <= Node.val <= 104
// The value of each node in the tree is unique.
// root is guaranteed to be a valid binary search tree.
// 0 <= low <= high <= 104
