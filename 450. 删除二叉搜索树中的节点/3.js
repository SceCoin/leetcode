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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 思路: 1. 叶子节点直接删除
  //      2. 有一个子节点,那就用子节点替代本身
  //      3. 底下有其他子节点, 那就用右子树下的最小值替代自身节点

  if (root == null) {
    return null;
  }

  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    if (root.left == null && root.right == null) {
      root = null;
    } else if (root.left != null && root.right == null) {
      root = root.left;
    } else if (root.left == null && root.right != null) {
      root = root.right;
    } else if (root.left != null && root.right != null) {
      let temp = root.right;
      while (temp.left != null) {
        temp = temp.left;
      }

      root.val = temp.val;
      root.right = deleteNode(root.right, root.val);
    }
  }

  return root;
};
