/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针方法:  也是双指针的一种.
// 链表里 一个跳一个节点, 一个跳两个节点,  如果两个节点会相遇, 那说明就是有环, 如果没有相遇能重合, 那就没环
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    if (fast.next == null) return false;

    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      return true;
    }
  }

  return false;
};
