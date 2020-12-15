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
  // 思路: dfs 查找到值然后返回就可以了

  let res = null;

  const recursion = (root, val) => {
    if (root == null) {
      return null;
    }

    if (root.val == val) {
      res = root;
    }

    if (root.val > val) {
      recursion(root.left, val);
    }

    if (root.val < val) {
      recursion(root.right, val);
    }
  };

  recursion(root, val);
  return res;
};

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
  if (root == null) return root;
  if (root.val == val) return root;
  return root.val < val
    ? searchBST(root.right, val)
    : searchBST(root.left, val);
};
