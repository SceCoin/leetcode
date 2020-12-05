/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const recursion = (root1, root2) => {
    if (root1 == null && root2 == null) {
      return true;
    }

    if (root1 == null && root2 !== null) {
      return false;
    }

    if (root1 !== null && root2 == null) {
      return false;
    }

    return (
      root1.val == root2.val &&
      recursion(root1.left, root2.left) &&
      recursion(root1.right, root2.right)
    );
  };

  return recursion(p, q);
};
