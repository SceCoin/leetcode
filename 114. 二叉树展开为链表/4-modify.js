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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // 展开为链表的话, 后续遍历, 从叶子节点开始变为链表
  if (root == null) {
    return root;
  }

  let left = flatten(root.left);
  let right = flatten(root.right);

  let temp = right;
  root.right = left;
  root.left = null;

  let last = root;
  while (last.right != null) {
    last = last.right;
  }

  last.right = temp;

  return root;
};
