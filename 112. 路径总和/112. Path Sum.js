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
  if (root == null) {
    // 如果树为空, 直接返回False, base case
    return false;
  }

  if (root.left == null && root.right == null) {
    // 说明遍历到叶子节点处, 只要判断 sum - 叶子节点值是否为0, 为0就是true
    return sum - root.val == 0;
  }

  return (
    hasPathSum(root.left, sum - root.val) || // 递归处的核心, 会从根节点一步步向下递归到叶子节点
    hasPathSum(root.right, sum - root.val) // 可以理解为是前序遍历, 因为操作了 sum - root.val, 然后在递归到下一层
  );
};
