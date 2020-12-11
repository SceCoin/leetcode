/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 思路: 链表也有前序遍历和后续遍历, 前序指的就是 从头到尾输出值, 后序指的就是从尾到头输出值

var isPalindrome = function (head) {
  let left = head;

  const traverse = function (head) {
    let right = head;
    if (right == null) {
      return true;
    }

    let res = traverse(right.next);

    res = res && left.val == right.val;
    left = left.next;
    return res;
  };

  return traverse(head);
};
