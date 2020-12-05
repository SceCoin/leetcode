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
  let left = head;

  const recursion = (head) => {
    let right = head;
    if (right == null) {
      return true;
    }

    let res = recursion(right.next);

    res = res && left.val == right.val;

    left = left.next;

    return res;
  };

  return recursion(head);
};
