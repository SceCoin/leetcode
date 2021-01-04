/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
  let small: ListNode = new ListNode()
  let large: ListNode = new ListNode()
  let smallHead: ListNode = small
  let largeHead: ListNode = large

  while (head != null) {
    if (head.val < x) {
      small.next = head
      small = small.next
    } else {
      large.next = head
      large = large.next
    }

    head = head.next
  }

  large.next = null
  small.next = largeHead.next
  return smallHead.next
};
