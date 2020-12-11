/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  let node = new Node();
  let curr = head;
  let temp = node;
  let map = new Map();

  // 先进行构造赋值的链表, 不考虑random
  while (curr != null) {
    temp.val = curr.val;
    temp.next = curr.next ? new Node() : null;
    map.set(curr, temp);

    temp = temp.next;
    curr = curr.next;
  }

  temp = node;
  curr = head;

  while (curr !== null) {
    temp.random = curr.random ? map.get(curr.random) : null;

    temp = temp.next;
    curr = curr.next;
  }

  return node;
};
