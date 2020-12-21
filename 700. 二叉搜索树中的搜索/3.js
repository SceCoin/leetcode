/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // 思路: 因为二叉搜索树, 所以查找是 当前节点 和 val比较, 如果 > 那就转左子树, 如果 < 那就转右子树, 递归到叶子节点
  if (root == null) {
    return null;
  }

  if (root.val == val) {
    return root;
  }

  if (root.val > val) {
    return searchBST(root.left, val);
  }

  if (root.val < val) {
    return searchBST(root.right, val);
  }
};
