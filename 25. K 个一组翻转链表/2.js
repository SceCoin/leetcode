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
 */
var reverseKGroup = function (head, k) {
  if (head == null || head.next == null) {
    return head;
  }

  let curr = head;
  let rePoint = head;

  for (let i = 0; i < k; i++) {
    if (rePoint == null) return head;
    rePoint = rePoint.next;
  }

  const reverseList = (curr, rePoint) => {
    let prev = null;

    while (curr != rePoint) {
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
