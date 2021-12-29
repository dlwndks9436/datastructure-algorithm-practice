class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  next: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode,
    right?: TreeNode,
    next?: TreeNode
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  let pointer: TreeNode | null = root;
  if (pointer.left) {
    pointer.left.next = pointer.right ? pointer.right : null;
    if (pointer.next) {
      pointer.right!.next = pointer.next.left;
    }
    connect(pointer.left);
    connect(pointer.right);
  }
  return root;
}
