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

function preorder(root: Node | null): number[] {
  const res: number[] = []

  const recursion = (root: Node | null): null => {
      if (root ==  null) {
          return null
      }

      res.push(root.val)

      root.children.forEach(child => {
          recursion(child)
      })
  }


  recursion(root)
  return res
};
