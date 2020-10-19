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

// 二叉树的中序遍历
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
