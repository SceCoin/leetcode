/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 思路就是按位相加， 并且要考虑到进位的问题
// 同时还存在两个链表的长度不一致，所以如果链表为空， 需要给值置0， 否则会报错

var addTwoNumbers = function (l1, l2) {
  let res = new ListNode(0);
  let head = res;
  let addOne = 0;

  while (l1 || l2 || addOne) {
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;
    let val = val1 + val2 + addOne;

    addOne = val >= 10 ? 1 : 0;
    res.next = new ListNode(val % 10);

    res = res.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return head.next;
};
