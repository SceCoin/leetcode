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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const createTree = (nums: number[], left: number, right: number): TreeNode | null => {
    if (left > right) {
      return null
    }

    const mid: number = left + ((right - left) >> 1)
    const root: TreeNode = new TreeNode(nums[mid])

    root.left = createTree(nums, left, mid - 1)
    root.right = createTree(nums, mid + 1, right)

    return root
  }

  return createTree(nums, 0, nums.length - 1)
};
