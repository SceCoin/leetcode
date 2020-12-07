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
  let point = head;
  let count = 0;

  while (++count && curr.next != null) {
    curr = curr.next;
  }

  curr.next = head;

  k = k % count;

  while (++k < count) {
    point = point.next;
  }

  head = point.next;
  point.next = null;

  return head;
};
