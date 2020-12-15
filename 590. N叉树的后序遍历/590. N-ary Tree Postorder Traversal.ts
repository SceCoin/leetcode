/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: Node | null): number[] {
  const res: number[] = []

  const recursion = (root: Node | null): null => {
      if (root == null) {
          return null
      }

      root.children.forEach(child => {
          recursion(child)
      })

      res.push(root.val)
  }

  recursion(root)
  return res
};
