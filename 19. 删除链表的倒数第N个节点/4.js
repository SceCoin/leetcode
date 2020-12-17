/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 思路: 快慢指针, 当快指针到终点时, 慢指针就走到要删除节点的前节点, 然后删除就可以了
  // 需要判断额外情况, 那就是删除第一个节点, 所以需要一个前置节点

  let dummy = new ListNode();
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
