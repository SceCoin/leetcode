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

function levelOrder(root: Node | null): number[][] {
    if (root == null) {
      return []
    }

      const queue: Node[] = [root]
    const res: number[][] = []

    while (queue.length > 0) {
      let len: number = queue.length
      const subRes: number[] = []

      while (len > 0) {
        const node: Node = queue.shift()
        len--

        subRes.push(node.val)

        if (node.children != null) {
          node.children.forEach(child => {
            queue.push(child)
          })
        }
      }

      res.push(subRes)
    }

    return res
  };
