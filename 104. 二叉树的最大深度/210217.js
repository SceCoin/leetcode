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
 * @return {number}
 */
var maxDepth = function (root) {
  // 思路: 每一颗子树都有自己的深度, 所以就是判断左子树和右子树深度那边更深, 然后加上根节点的高度, 就是一颗树的高度

  const recursion = (root) => {
    if (root == null) {
      return 0;
    }

    let L = recursion(root.left);
    let R = recursion(root.right);

    return Math.max(L, R) + 1;
  };

  return recursion(root);
};
