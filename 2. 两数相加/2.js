/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 思路: 创建一个链表用来保存结果, 然后依次遍历每个节点, 如果有大于10的值就用一个临时变量保存,

  let res = new ListNode(0);
  let head = res;
  let carry = 0;

  while (l1 || l2 || carry) {
    let val1 = l1 != null ? l1.val : 0;
    let val2 = l2 != null ? l2.val : 0;
    let val = val1 + val2 + carry;

    carry = val >= 10 ? 1 : 0;
    res.next = new ListNode(val % 10);

    res = res.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return head.next;
};
