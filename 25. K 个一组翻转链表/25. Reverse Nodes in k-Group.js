/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * https://labuladong.gitbook.io/algo/shu-ju-jie-gou-xi-lie/2.2-shou-ba-shou-shua-lian-biao-ti-mu-xun-lian-di-gui-si-wei/k-ge-yi-zu-fan-zhuan-lian-biao
 */

// 思路: 从最简单的翻转链表开始解决, 然后解决 翻转从开始到第n个节点的链表, 最后才是翻转K个一组的链表

var reverseKGroup = function (head, k) {
  if (head == null || head.next == null) {
    return head;
  }

  let curr = head;
  let rePoint = head;

  // 这里就是边界条件, 并且把翻转点的位置找到, K如果为3, 那么翻转点就是在第二个节点处
  for (let i = 0; i < k; i++) {
    if (rePoint == null) return head;
    rePoint = rePoint.next;
  }

  // 从当前节点到 翻转点的链表开始 翻转, 翻转点不属于现在翻转的范围里, 它指向的是下一个节点
  const reverseList = function (curr, rePoint) {
    let prev = null;
    while (curr !== rePoint) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    return prev;
  };

  let newHead = reverseList(curr, rePoint);

  curr.next = reverseKGroup(rePoint, k);

  return newHead;
};
