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

function maxDepth3(root: Node): number {
  if (root == null) {
      return 0
  }

  if (root.children == null) {
      return 1
  }

  let max: number = 0
  for (let i: number = 0; i < root.children.length; i++) {
      let depth = maxDepth(root.children[i])
      max = Math.max(max, depth)
  }

  return max + 1
};
