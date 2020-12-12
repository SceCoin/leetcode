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
  // 思路: 后续遍历, 先从叶子节点开始计算
  if (root == null) {
    return root;
  }

  let left = countNodes(root.left);
  let right = countNodes(root.right);

  return left + right + 1;
};
