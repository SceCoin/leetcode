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
  // 思路: 将链表变成环, 然后用快慢指针移动, 快指针先移动k的位置, 慢指针在移动, 慢指针停留的位置就是断点处
  //       需要将链表的个数计数下来,
  if (head == null) {
    return null;
  }

  let fast = head;
  let slow = head;
  let count = 1;

  while (fast.next != null) {
    fast = fast.next;
    count++;
  }
  fast.next = head;

  k = k % count;
  while (++k < count) {
    slow = slow.next;
  }

  let newHead = slow.next;
  slow.next = null;

  return newHead;
};
