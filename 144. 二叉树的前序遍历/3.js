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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];

  const recursion = (root) => {
    if (root == null) {
      return null;
    }

    res.push(root.val);

    recursion(root.left);
    recursion(root.right);
  };

  recursion(root);
  return res;
};
