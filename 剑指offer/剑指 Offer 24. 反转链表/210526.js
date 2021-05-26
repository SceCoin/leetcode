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
 var reverseList = function(head) {
    // 翻转链表就是修改指针, 需要创建一个空的头结点
    let prev = null

    while (head != null) {
      let next = head.next
      head.next = prev
      prev = head
      head = next
    }

    return prev
  };
