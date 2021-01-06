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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummy: ListNode = new ListNode()
  dummy.next = head
  let slow: ListNode = dummy
  let fast: ListNode = head

  while (fast) {
    if (fast.next && fast.val === fast.next.val) {
      let sameVal: number = fast.val
      while (fast && sameVal == fast.val) {
        fast = fast.next
      }
    } else {
      slow.next = fast
      slow = fast
      fast = fast.next
    }
  }

  slow.next = fast
  return dummy.next
};
