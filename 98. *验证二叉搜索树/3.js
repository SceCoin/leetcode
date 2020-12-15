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
var isValidBST = function (root) {
  // 思路: 根节点的范围是 -Infinity 到 Infinity, 而左节点范围是 -Infinity 到 root.val,

  const recursion = (root, min, max) => {
    if (root == null) {
      return true;
    }

    if (root.val <= min || root.val >= max) {
      return false;
    }

    return (
      recursion(root.left, min, root.val) &&
      recursion(root.right, root.val, max)
    );
  };

  return recursion(root, -Infinity, Infinity);
};
