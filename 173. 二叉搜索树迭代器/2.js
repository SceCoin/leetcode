/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  // 思路: 先进行中序遍历, 导出一个数组, 然后后面就可以操作了

  this.array = [];
  this.index = 0;

  const inorder = (root) => {
    if (root == null) {
      return null;
    }

    inorder(root.left);
    this.array.push(root.val);
    inorder(root.right);
  };

  inorder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.array[this.index++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.index < this.array.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
