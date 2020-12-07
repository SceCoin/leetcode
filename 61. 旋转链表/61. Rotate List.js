/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) {
    return null;
  }

  let curr = head;
  let count = 0;

  // 将单链表变成环链表
  while (++count && curr.next != null) {
    curr = curr.next;
  }

  curr.next = head;

  k = k % count; // 去重

  // 找到断点处
  while (++k < count) {
    head = head.next;
  }

  let temp = head;
  head = head.next;
  temp.next = null;

  return head;
};
