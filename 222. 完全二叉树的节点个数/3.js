/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  // 后序遍历, 从叶子节点开始计数

  if (root == null) {
    return null;
  }

  let left = countNodes(root.left);
  let right = countNodes(root.right);

  return left + right + 1;
};
