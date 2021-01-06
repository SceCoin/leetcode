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
var deleteDuplicates = function (head) {
  // 思路: 链表的思路就是指针遍历, 用双指针, 前后指针判断是否相等, 不等时后指针继续向后移动, 后指针在判断后一个节点是否相等

  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = head;

  while (fast) {
    if (fast.next && fast.val == fast.next.val) {
      let sameVal = fast.val;
      while (fast && sameVal === fast.val) {
        fast = fast.next;
      }
    } else {
      slow.next = fast;
      slow = fast;
      fast = fast.next;
    }
  }
  slow.next = fast;
  return dummy.next;
};
