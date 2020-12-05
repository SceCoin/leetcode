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
// 解法一: 设置 前节点, 然后从前节点开始走

var removeNthFromEnd = function (head, n) {
  if (head == null || head.next == null) {
    return null;
  }

  let dummy = new ListNode();
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};

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
//解法二:  单独判断链表长度是否小于n, 如果是那就单独处理,
var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  while (--n) {
    fast = fast.next;
  }

  // 单独处理,n到n时已经走到头, 那就是删除头节点就可以了
  if (fast.next == null) {
    return head.next;
  }

  fast = fast.next;
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};
