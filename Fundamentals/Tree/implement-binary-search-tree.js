class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let traversingNode = this.root;
    while (traversingNode) {
      if (value < traversingNode.value) {
        if (!traversingNode.left) {
          traversingNode.left = newNode;
          return this;
        }
        traversingNode = traversingNode.left;
      } else if (value > traversingNode.value) {
        if (!traversingNode.right) {
          traversingNode.right = newNode;
          return this;
        }
        traversingNode = traversingNode.right;
      } else {
        return this;
      }
    }
  }
  lookup(value) {
    let traversingNode = this.root;
    if (value === this.root.value) {
      return this.root;
    }
    while (traversingNode !== value && traversingNode) {
      if (value < traversingNode.value) {
        traversingNode = traversingNode.left;
      } else if (value > traversingNode.value) {
        traversingNode = traversingNode.right;
      } else if (traversingNode.value === value) {
        return traversingNode;
      }
    }
    return undefined;
  }
  remove(value) {
    if (!this.root) {
      return undefined;
    }
    let currentNode = this.root;
    let parentNode;
    while (currentNode?.value !== value && currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    if (!currentNode) {
      return undefined;
    }
    // value exists
    if (currentNode.right) {
      let childNode = currentNode.right;
      let prevNode;
      while (childNode.left) {
        prevNode = childNode;
        childNode = childNode.left;
      }
      if (prevNode) {
        prevNode.left = childNode.right;
        childNode.right = currentNode.right;
      }
      childNode.left = currentNode.left;
      if (!parentNode) {
        this.root = childNode;
      } else if (parentNode.left === currentNode) {
        parentNode.left = childNode;
      } else if (parentNode.right === currentNode) {
        parentNode.right = childNode;
      }
    } else {
      if (!parentNode) {
        this.root = currentNode.left;
      } else if (parentNode.left === currentNode) {
        parentNode.left = currentNode.left;
      } else if (parentNode.right === currentNode) {
        parentNode.right = currentNode.left;
      }
    }
    return currentNode;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(99);
tree.insert(15);
tree.insert(1);
tree.remove(1);
console.log(tree.remove(4));
// console.log(tree.lookup(20));
// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
