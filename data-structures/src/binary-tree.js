class TreeNode {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  insert(element) {
    if (this.root == null) {
      this.root = new TreeNode(element);
      this.size += 1;
    } else {
      let current = this.root;
      let done = false;
      while (done == false) {
        if (current.element.key == element.key) {
          done = true;
        } else {
          if (element.key < current.element.key) {
            // going left
            if (current.left == null) {
              current.left = new TreeNode(element);
              this.size += 1;
              done = true;
            } else {
              current = current.left;
            }
          } else {
            // going right
            if (current.right == null) {
              current.right = new TreeNode(element);
              this.size += 1;
              done = true;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  }
  find(key) {}
  remove(key) {}
}
