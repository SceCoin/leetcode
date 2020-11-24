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
var reverseList = function (head) {
  let [prev, curr] = [null, head];

  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }

  return prev;
};
