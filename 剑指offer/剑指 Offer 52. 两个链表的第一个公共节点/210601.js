/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 两个链表遍历完就直接接到另一条链表上, 两个指针相遇就是公共节点
  let pa = headA
  let pb = headB

  while (pa != pb) {
    pa = pa ? pa.next : headB
    pb = pb ? pb.next : headA
  }

  return pb
}
