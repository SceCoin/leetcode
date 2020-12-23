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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 思路: 中序遍历, 变成升序的数组后选出第K小的元素

  const inorder = [];

  const recursion = (root) => {
    if (root == null) {
      return null;
    }

    recursion(root.left);
    inorder.push(root.val);
    recursion(root.right);
  };

  recursion(root);

  return inorder[k - 1];
};
