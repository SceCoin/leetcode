/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 思路: 链表也可以后续遍历, 从后面返回值, 而不用重新构造反转

  let left = head;

  const traverse = (head) => {
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
