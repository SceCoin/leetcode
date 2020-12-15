/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  if (root == null) {
    return null
  }

  const queue: Node[] = [root]

  while (queue.length > 0) {
    let len: number = queue.length

    while (len > 0) {
      const node: Node = queue.shift()
      len--

      if (len == 0) {
        node.next = null
      } else {
        node.next = queue[0]
      }

      if (node.left != null) {
        queue.push(node.left)
      }

      if (node.right != null) {
        queue.push(node.right)
      }
    }
  }

  return root
};
