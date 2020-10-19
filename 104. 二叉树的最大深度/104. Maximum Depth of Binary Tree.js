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
var maxDepth2 = function (root) {
  let res = 0;

  function depth(root) {
    if (!root) {
      return 0;
    }

    let L = depth(root.left);
    let R = depth(root.right);

    return Math.max(L, R) + 1;
  }

  res = depth(root);
  return res;
};

const maxDepth = function (root) {
  if (root) {
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }

  return 0;
};
