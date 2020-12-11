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
  // 先判断是否有环
  // 在有环之后在找入环口

  let fast = head;
  let slow = head;

  while (fast) {
    if (fast.next == null) return null;

    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      fast = head;

      while (true) {
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
