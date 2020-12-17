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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode()
  dummy.next = head
  let fast = dummy
  let slow = dummy

  while (n > 0) {
    fast = fast.next
    n--
  }

  while (fast.next != null) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return dummy.next
};
