/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // 思路: x是既用来分割链表, 又来判断大小的.  第一条链表长度小于等于x并且其中的值小于x的值, 第二条就是剩下的,
  let small = new ListNode();
  let large = new ListNode();
  let curr = head;
  let smallHead = small;
  let largeHead = large;

  while (curr != null) {
    if (curr.val < x) {
      small.next = curr;
      small = small.next;
    } else {
      large.next = curr;
      large = large.next;
    }
    curr = curr.next;
  }

  large.next = null;
  small.next = largeHead.next;

  return smallHead.next;
};
