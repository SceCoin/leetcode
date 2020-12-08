/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let nextNode = null;

  const reverseN = (head, n) => {
    // 当 n == 1, 说明就是翻转自身, 只要记录一下后面的节点,返回当前就可以
    if (n == 1) {
      nextNode = head.next;
      return head;
    }

    let last = reverseN(head.next, n - 1); // last相当于一下子跳转到需要翻转的最后节点
    head.next.next = head; // head.next 的 next 指向 head, 就是将类似 3 --> 2 的操作
    head.next = nextNode; // 将 1 --> 4 这样的操作

    return last; // 返回的是最后的节点,
  };

  // 当 m == 1时就是翻转 从1到n的链表
  if (m == 1) {
    return reverseN(head, n);
  }

  // head 距离 m 节点是 m 距离, 那么 head.next 距离 m 节点就是 m - 1 的距离, 所以可以一直递归到 m == 1 时进入翻转处
  head.next = reverseBetween(head.next, m - 1, n - 1);

  return head;
};
