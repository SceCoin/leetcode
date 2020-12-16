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
  // 思路: 让两个指针进行遍历, 当遍历到尾部时换到另一个链表再开始遍历, 最后相遇的点就是相交点

  let pa = headA;
  let pb = headB;

  while (pa != pb) {
    pa = pa ? pa.next : headB;
    pb = pb ? pb.next : headA;
  }

  return pb;
};
