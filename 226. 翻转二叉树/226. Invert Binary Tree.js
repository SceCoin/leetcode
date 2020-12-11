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
 * @return {TreeNode}
 */

// 思路:  翻转二叉树 其实就是 让左右节点互相交换, 只要先考虑一个节点该怎么交换, 剩下的直接递归遍历就可以.
// 递归一定需要考虑边界 base case, 最基本的情况.
// 交换就是设置一个临时变量, 然后通过前序遍历

var invertTree = function (root) {
  if (root == null) {
    return root;
  }

  // 前序遍历
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

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

// 解法2:
var flatten = function (root) {
  if (root === null) {
    return;
  }

  if (root.left) {
    let last = root.left;
    while (last.right !== null) {
      last = last.right;
    }

    let temp = root.right;
    let left = root.left;
    root.right = left;

    last.right = temp;
    root.left = null;
  }

  flatten(root.right);
};
