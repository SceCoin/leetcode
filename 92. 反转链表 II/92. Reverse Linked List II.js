/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// 先学会 翻转整个链表,
// 再学会 翻转前N个元素 的链表写法
// 最后就可以用 翻转前N个元素 的链表 再考虑 前 m 到 n 个元素翻转的写法

var reverseBetween = function (head, m, n) {
  let nextNode = null;

  const reverseN = function (head, n) {
    if (n == 1) {
      nextNode = head.next;
      return head;
    }

    let last = reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = nextNode;

    return last;
  };

  if (m == 1) {
    return reverseN(head, n);
  }

  // 前进到翻转的起点开始触发 m == 1
  head.next = reverseBetween(head.next, m - 1, n - 1);

  return head;
};
