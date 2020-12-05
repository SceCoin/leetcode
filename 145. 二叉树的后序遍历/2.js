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
var postorderTraversal = function (root) {
  let res = [];

  const postorder = (root) => {
    if (root == null) {
      return null;
    }

    postorder(root.left);
    postorder(root.right);

    res.push(root.val);
  };

  postorder(root);
  return res;
};
