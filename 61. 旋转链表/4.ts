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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head == null) {
    return head
  }

  let fast: ListNode = head
  let slow: ListNode = head
  let count: number = 1

  while (fast.next != null) {
    fast = fast.next
    count++
  }
  fast.next = head


  k = k % count
  while (++k < count) {
    slow = slow.next
  }

  let newHead: ListNode = slow.next
  slow.next = null

  return newHead
};
