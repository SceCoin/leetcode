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
  // 因为构造链表时 random还没有指向, 所以需要等链表完成再连接random

  if (head == null) {
    return null;
  }

  let node = new Node();
  let temp = node;
  let curr = head;
  let map = new Map();

  while (curr != null) {
    temp.val = curr.val;
    temp.next = curr.next ? new Node() : null;
    map.set(curr, temp);

    temp = temp.next;
    curr = curr.next;
  }

  temp = node;
  curr = head;

  while (curr != null) {
    temp.random = curr.random ? map.get(curr.random) : null;

    temp = temp.next;
    curr = curr.next;
  }

  return node;
};
