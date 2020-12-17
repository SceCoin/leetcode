/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 思路: 需要一个前置节点, 这样才可以删除第一个节点值刚好为val的情况

  let dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;

  while (curr.next != null) {
    if (curr.next.val == val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
};
