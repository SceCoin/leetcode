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

//  思路:  根节点的值是没有范围限制的，从-\infty−∞到+\infty+∞
//        但根节点的出现限制了左右子节点的范围
//        对左子节点来说，它小于父节点的值
//        对右子节点来说，它大于父节点的值

var isValidBST = function (root) {
  const dfs = (root, min, max) => {
    if (root == null) {
      return true;
    }

    if (root.val <= min || root.val >= max) {
      return false;
    }

    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  };

  return dfs(root, -Infinity, Infinity);
};
