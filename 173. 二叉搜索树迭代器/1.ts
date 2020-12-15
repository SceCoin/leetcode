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

class BSTIterator {
  array: number[]
  index: number

  constructor(root: TreeNode | null, array?: number[], index?: number) {
    this.array = [];
    this.index = 0

    const inorder = (root: TreeNode | null) => {
      if (root == null) {
        return null
      }

      inorder(root.left)
      this.array.push(root.val)
      inorder(root.right)
    }

    inorder(root)
  }

  next(): number {
    return this.array[this.index++]
  }

  hasNext(): boolean {
    return this.index < this.array.length
  }
}

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
