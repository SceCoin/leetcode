/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    // 方法1: 快慢指针, 快指针先走k步, 然后快慢指针一起走, 返回慢指针.
    // let fast = head
    // let slow = head

    // while (k--) {
    //   fast = fast.next
    // }

    // while (fast != null) {
    //   fast = fast.next
    //   slow = slow.next
    // }

    // return slow

    // 方法2: 先遍历一遍链表, 计算出节点个数, 然后再遍历依次找到第K个返回
    let count = 0
    let curr = head

    while (curr != null) {
      count++
      curr = curr.next
    }

    let start = count - k
    count = 0
    while (head != null) {
      if (count == start) {
        return head
      }
      head = head.next
      count++
    }
  };
