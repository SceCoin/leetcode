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

//  思路:
//  1. 如果目标节点没有子节点，我们可以直接移除该目标节点。
//  2. 如果目标节只有一个子节点，我们可以用其子节点作为替换。
//  3. 如果目标节点有两个子节点，我们需要用其中序后继节点或者前驱节点来替换，再删除该目标节点。

var deleteNode = function (root, key) {
  if (root == null) {
    return null;
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left == null && root.right == null) {
      root = null;
    } else if (root.left == null && root.right != null) {
      root = root.right;
    } else if (root.left != null && root.right == null) {
      root = root.left;
    } else if (root.left != null && root.right != null) {
      let tmp = root.right;
      while (tmp.left != null) {
        tmp = tmp.left;
      }
      root.val = tmp.val;
      root.right = deleteNode(root.right, root.val);
    }
  }

  return root;
};
