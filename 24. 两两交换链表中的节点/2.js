/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;

  let first = head;

  while (first && first.next) {
    let second = first.next;
    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
    first = first.next;
  }

  return dummy.next;
};
