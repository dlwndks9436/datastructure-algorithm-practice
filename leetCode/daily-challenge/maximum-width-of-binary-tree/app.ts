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

function widthOfBinaryTree(root: TreeNode | null): number {
  let maxWidth = 0;
  const minPositionOfDepth = new Array<number>();
  traverseNode(root, 0, 0);
  return maxWidth;
  function traverseNode(
    node: TreeNode | null,
    depth: number,
    location: number
  ) {
    if (!node) return;
    if (minPositionOfDepth[depth] === undefined) {
      minPositionOfDepth[depth] = location;
    }
    maxWidth = Math.max(maxWidth, location - minPositionOfDepth[depth] + 1);
    traverseNode(
      node.left,
      depth + 1,
      (location - minPositionOfDepth[depth]) * 2
    );
    traverseNode(
      node.right,
      depth + 1,
      (location - minPositionOfDepth[depth]) * 2 + 1
    );
  }
}

const root = new TreeNode(
  0,
  null,
  new TreeNode(
    0,
    null,
    new TreeNode(
      0,
      null,
      new TreeNode(
        0,
        new TreeNode(1, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2, new TreeNode(5), new TreeNode(6))
      )
    )
  )
);

// const root = new TreeNode(1, new TreeNode(3, new TreeNode(5), new TreeNode(3)));

const output = widthOfBinaryTree(root);
console.log(output);

// Given the root of a binary tree, return the maximum width of the given tree.

// The maximum width of a tree is the maximum width among all levels.

// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes are also counted into the length calculation.

// It is guaranteed that the answer will in the range of 32-bit signed integer.

// Example 1:

// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
// Example 2:

// Input: root = [1,3,null,5,3]
// Output: 2
// Explanation: The maximum width existing in the third level with the length 2 (5,3).
// Example 3:

// Input: root = [1,3,2,5]
// Output: 2
// Explanation: The maximum width existing in the second level with the length 2 (3,2).

// Constraints:

// The number of nodes in the tree is in the range [1, 3000].
// -100 <= Node.val <= 100
