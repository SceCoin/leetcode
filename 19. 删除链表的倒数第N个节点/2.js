/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 链表考虑的都先是指针, 因为删除链表节点, 所以说明就需要一个指针遍历, 一个指针操作
  // 然后由于存在n大于链表节点数的情况, 所以有情况要考虑到如果n过大, 那其实就是删除头节点的意思, 返回剩余节点
  // 要规避这问题, 可以设立前置节点

  let preHead = new ListNode();
  preHead.next = head;
  let prev = preHead;

  let fast = prev;
  let slow = prev;

  while (n-- > 0) {
    fast = fast.next;
  }

  while (fast != null && fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return preHead.next;
};
