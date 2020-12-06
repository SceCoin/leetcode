/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 删除节点就是找到它之前的节点, 然后直接跳过它, 但因为存在头节点可能就是的问题, 所以需要前置节点

  let preHead = new ListNode();
  preHead.next = head;
  let curr = preHead;

  while (curr != null && curr.next != null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return preHead.next;
};
