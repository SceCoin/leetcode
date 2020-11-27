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
  if (root == null) {
    return root;
  }

  // 将左右树变成链表, 不要考虑怎么变的, 而是函数定义就是变为链表
  flatten(root.left);
  flatten(root.right);

  // 后续遍历, 处理的是root节点的事, 然后解决已经都变成链表的左右节点
  let left = root.left;
  let right = root.right;

  // 将root做节点为空, 右边放左边成链表的左节点
  root.left = null;
  root.right = left;

  // 遍历到右边的最根部, 再把 右链表加上去
  let p = root;
  while (p.right !== null) {
    p = p.right;
  }

  p.right = right;
};
