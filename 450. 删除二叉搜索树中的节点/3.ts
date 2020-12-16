/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root == null) {
    return null
  }

  if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else {
    if (root.left == null && root.right == null) {
      root = null
    } else if (root.left != null && root.right == null) {
      root = root.left
    } else if (root.left == null && root.left != null) {
      root = root.right
    } else {
      let temp: TreeNode = root.right
      while (temp.left != null) {
        temp = temp.left
      }

      root.val = temp.val
      root.right = deleteNode(root.right, root.val)
    }
  }

  return root
};
