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
  // 预先设置一个节点然后一个节点一个节点的修改next
  let prev = null

  while (head != null) {
    let next = head.next
    head.next = prev
    prev = head
    head = next
  }

  return prev
}
