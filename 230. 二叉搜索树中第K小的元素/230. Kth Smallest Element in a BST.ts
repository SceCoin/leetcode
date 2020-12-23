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

function kthSmallest(root: TreeNode | null, k: number): number {
  const inorder: number[] = []

  const recursion = (root: TreeNode | null): void => {
    if (root == null) {
      return null
    }

    recursion(root.left)
    inorder.push(root.val)
    recursion(root.right)
  }

  recursion(root)
  return inorder[k - 1]
};
