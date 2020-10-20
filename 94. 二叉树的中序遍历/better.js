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
 * @return {number[]}
 */

// 二叉树的中序遍历, 递归简单算法, 中序的中指的是根节点再中间.
var inorderTraversal = function (root) {
  let res = [];

  function inorder(root) {
    if (root === null) {
      return;
    }

    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }

  inorder(root);
  return res;
};
