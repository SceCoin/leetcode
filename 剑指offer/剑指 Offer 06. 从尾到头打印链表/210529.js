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
    // 方法1: 反转链表, 先做个空节点, 然后修改指向,
    // let res = []
    // let prev = null

    // while (head != null) {
    //   let temp = head.next
    //   head.next = prev
    //   prev = head
    //   head = temp
    // }

    // while (prev != null) {
    //   res.push(prev.val)
    //   prev = prev.next
    // }

    // return res

    // 方法2: 因为用数组返回, 所以直接内置函数 unshift, 遍历一遍就保存到数组里
    let res = []
    while (head != null) {
      res.unshift(head.val)
      head = head.next
    }

    return res
  };
