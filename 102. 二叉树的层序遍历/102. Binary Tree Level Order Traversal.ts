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

function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) {
      return []
  }

  const queue: TreeNode[] = [root]
  const res: number[][] = []

  while (queue.length > 0) {
      let len: number = queue.length
      const subRes: number[] = []

      while (len > 0) {
          const node: TreeNode = queue.shift()
          len--

          subRes.push(node.val)

          if (node.left != null) {
              queue.push(node.left)
          }

          if (node.right != null) {
              queue.push(node.right)
          }
      }

      res.push(subRes)
  }

  return res
};
