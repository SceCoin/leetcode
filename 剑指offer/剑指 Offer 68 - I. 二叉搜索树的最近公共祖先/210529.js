/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    // 因为是二叉搜索树, 所以如果p.val和q.val的值都小于或大于root.left, root.right,
    // 那么就在左侧或右侧, 如果p.val或q.val一个大于root.val, 一个小于root.val, 那就是在两侧,
    // 则祖先就是root

    if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q)
    }

    return root
  };
