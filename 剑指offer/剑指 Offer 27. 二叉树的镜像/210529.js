/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  // 翻转二叉树, 递归操作, 每颗子树也执行了翻转,
  if (root == null) {
    return null
  }

  let temp = root.left
  root.left = mirrorTree(root.right)
  root.right = mirrorTree(temp)

  return root
}
