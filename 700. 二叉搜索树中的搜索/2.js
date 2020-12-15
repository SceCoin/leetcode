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
  let res = null;

  const recursion = (root, val) => {
    if (root == null) {
      return null;
    }

    if (root.val == val) {
      res = root;
    }

    if (root.val < val) {
      recursion(root.right, val);
    }

    if (root.val > val) {
      recursion(root.left, val);
    }
  };

  recursion(root, val);
  return res;
};
