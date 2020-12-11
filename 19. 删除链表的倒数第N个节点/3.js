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
  if (head == null || head.next == null) {
    return null;
  }

  let dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;
  let prev = dummy;

  while (n > 0) {
    curr = curr.next;
    n--;
  }

  while (curr.next !== null) {
    curr = curr.next;
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return dummy.next;
};
