/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  // 深度遍历, DFS, 递归,  sum - root.val, 到叶子节点时, return sum - root.val == 0

  if (root == null) {
    return false;
  }

  // 要判断到叶子节点才能返回值
  if (root.left == null && root.right == null) {
    return sum - root.val == 0;
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
