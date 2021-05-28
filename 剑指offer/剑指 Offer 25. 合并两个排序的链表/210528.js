/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    // 排序链表就是针对每个节点做链接, 比较两个节点值, 那个大返回下一个, 递归操作
    if (l1 == null) {
      return l2
    }

    if (l2 == null) {
      return l1
    }

    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
    }
  };
