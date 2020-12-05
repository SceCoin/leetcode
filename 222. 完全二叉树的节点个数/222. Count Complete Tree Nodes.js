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

// 后续遍历, 因为需要先遍历到最后再开始计算节点数

var countNodes = function (root) {
  if (root == null) {
    return null;
  }

  let left = countNodes(root.left);
  let right = countNodes(root.right);

  let res = left + right + 1;

  return res;
};
