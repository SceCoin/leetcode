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
    // 直接遍历链表, 同时数组使用 unshift插入
    let res = []
    let curr = head

    while (curr != null) {
      res.unshift(curr.val)
      curr = curr.next
    }

    return res
  };
