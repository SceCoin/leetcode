/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  if (head == null) {
    return null
  }

  let node: Node = new Node()
  let curr: Node = head
  let temp: Node = node
  let map = new Map()

  while (curr != null) {
    temp.val = curr.val
    temp.next = curr.next ? new Node() : null
    map.set(curr, temp)

    temp =  temp.next
    curr = curr.next
  }

  curr = head
  temp = node

  while (curr != null) {
    temp.random = curr.random ? map.get(curr.random) : null

    curr = curr.next
    temp = temp.next
  }

  return node
};
