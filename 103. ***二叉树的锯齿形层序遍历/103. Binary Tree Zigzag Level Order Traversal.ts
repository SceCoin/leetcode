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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root == null) {
    return []
  }

  const queue: TreeNode[] = [root]
  const res: number[][] = []

  while (queue.length > 0) {
    let len: number = queue.length
    const subRes: number[] = []

    while (len > 0) {
      const node = queue.shift()
      len--

      subRes.push(node.val)

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    if (res.length % 2 !== 0) {
      res.push(subRes.reverse())
    } else {
      res.push(subRes)
    }
  }

  return res
};
