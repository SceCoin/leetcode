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

// 思路:  因为还是环形链表, 所以依旧需要用到快慢指针, 先判断是否有环
// 有环之后就要寻找相遇点.
// 而由于快慢指针的倍数是2倍, 所以 假设 D为到入环节点的距离, S为相遇点, E为环剩余的点.
// 那么  慢指针走的距离为 D + S
// 快指针距离为  D + n * (S + E) + S
// 二者的等式应该为   2 (D + S) = D + n * (S + E) + S
// 假设 n 为 1, 那么 D = E
// 所以也就是 慢指针刚好走到相遇点时, 快指针从新为到 初始点按同样步调走, 就会在入环口相遇.

var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    if (fast.next == null) {
      return null;
    }

    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
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
