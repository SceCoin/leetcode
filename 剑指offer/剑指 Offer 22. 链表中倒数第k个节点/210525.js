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
    // 快慢指针
    let fast = head
    let slow = head
    let i = 0
    while (i++ < k) {
      fast = fast.next
    }

    while (fast) {
      fast = fast.next
      slow = slow.next
    }

    return slow
  };
