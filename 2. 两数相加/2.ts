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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let res: ListNode = new ListNode()
  let carry: number = 0
  let head: ListNode = res

  while (l1 || l2 || carry) {
    let val1: number = l1 !== null ? l1.val : 0
    let val2: number = l2 !== null ? l2.val : 0
    let val: number = val1 + val2 + carry

    carry = val >= 10 ? 1 : 0
    res.next = new ListNode(val % 10)

    res = res.next

    if(l1) l1 = l1.next
    if(l2) l2 = l2.next
  }

  return head.next
};
