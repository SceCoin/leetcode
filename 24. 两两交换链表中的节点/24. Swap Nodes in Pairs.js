/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 想法: 需要一个头结点, 最后能通过头结点返回
//      1. 还需要三个指针. prev, first, second.
//      2. first, second指针 指向的节点互相交换.
//      3. prev在 First节点之前一个节点, 用来连接指向
//      4. 然后 重新移动  prev He first 指针, second指针会在一开始就设置了

var swapPairs = function (head) {
  const dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;

  let first = head;

  while (first && first.next) {
    const second = first.next;
    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
    first = first.next;
  }

  return dummy.next;
};
