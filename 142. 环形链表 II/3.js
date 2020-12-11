/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 环形链表一定是快慢指针

  let fast = head;
  let slow = head;

  while (fast) {
    if (fast.next == null) {
      return null;
    }

    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      fast = head;

      while (fast) {
        if (fast == slow) {
          return fast;
        }

        fast = fast.next;
        slow = slow.next;
      }
    }
  }

  return null;
};
