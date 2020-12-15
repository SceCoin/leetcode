/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node): number {
  if (root == null) {
    return 0
  }

  if (root.children == null) {
    return 1
  }

  let max: number = 0
  // root.children.forEach(child => {
  //   const depth: number = maxDepth(child)
  //   max = Math.max(max, depth)
  // })

  for (let i: number = 0; i < root.children.length; i++) {
    const depth: number = maxDepth(root.children[i])
    max = Math.max(max, depth)
  }

  return max + 1
};
