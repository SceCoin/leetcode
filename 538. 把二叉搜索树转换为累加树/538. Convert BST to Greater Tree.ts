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

function convertBST(root: TreeNode | null): TreeNode | null {
  let sum: number = 0

  const inorder = (root: TreeNode | null): null => {
    if (root == null) {
      return null
    }

    inorder(root.right)

    sum += root.val
    root.val = sum

    inorder(root.left)
  }

  inorder(root)
  return root
};
