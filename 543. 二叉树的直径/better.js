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

// 递归深度就是层数. 只要函数返回的也是层数就可以,
// 函数内部执行是深度优先, 先到叶子节点, 返回0后 + 1是返回到父节点的路径高度, 所以最后又会返回到根节点位置,
var diameterOfBinaryTree = function (root) {
  let ans = 1;

  function depth(rootNode) {
    if (!rootNode) {
      return 0;
    }

    let L = depth(rootNode.left);
    let R = depth(rootNode.right);

    ans = Math.max(ans, L + R + 1);

    return Math.max(L, R) + 1;
  }

  depth(root);

  return ans - 1;
};
