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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let res = 0;

  const recursion = (root, low, high) => {
    if (root == null) {
      return null;
    }

    if (root.val >= low && root.val <= high) {
      res += root.val;
    }

    if (root.val >= low) {
      recursion(root.left, low, high);
    }

    if (root.val <= high) {
      recursion(root.right, low, high);
    }
  };

  recursion(root, low, high);
  return res;
};
