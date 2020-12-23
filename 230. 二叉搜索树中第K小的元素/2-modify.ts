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
  // 思路: 栈解 将节点按照 左-根-右 顺序压入栈中, 出栈顺序是升序的
  const stack: TreeNode[] = []

  while (true) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()
    if (!(--k)) return root.val

    root = root.right
  }
};
