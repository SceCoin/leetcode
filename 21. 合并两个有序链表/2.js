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

// 思路:  两个链表的Next指向是通过 两个链表的值对比, 小的那个用来返回
// 1.如果l1, l2有一个为空, 那就返回另一个
// 2.比较当前节点的值, 值小的节点用来返回, 然后将它的next指向 下一个对比节点
// 3.结束条件: 当l1或l2为空时

var mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    return l2;
  }

  if (l2 == null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
