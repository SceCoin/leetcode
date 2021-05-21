/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    // 翻转链表, 然后保存值

    let res = []

    let prev = null
    let curr = head

    while (curr != null) {
      let next = curr.next
      curr.next = prev

      prev = curr
      curr = next
    }

    while (prev != null) {
      res.push(prev.val)
      prev = prev.next
    }

    return res
  };
