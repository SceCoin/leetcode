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
 * @return {boolean}
 */

// 思路是把root想成是两棵树, 一颗往左走, 一棵往右走, 然后互相确认对方的val值.
var isSymmetric = function (root) {
  return helper(root, root);
};

const helper = function (tree1, tree2) {
  if (tree1 == null && tree2 == null) {
    return true;
  }
  if (tree1 == null || tree2 == null) {
    return false;
  }
  return (
    tree1.val == tree2.val &&
    helper(tree1.left, tree2.right) &&
    helper(tree1.right, tree2.left)
  );
};
