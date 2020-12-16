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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let pa: ListNode = headA
  let pb: ListNode = headB

  while (pa != pb) {
    pa = pa ? pa.next : headB
    pb = pb ? pb.next : headA
  }

  return pa
};
