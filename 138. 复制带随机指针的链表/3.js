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
  // 先建立好链表, 然后在给random属性加节点 ,因为random指向的随机处可能节点还没产生

  if (head == null) {
    return head;
  }

  let node = new Node();
  let curr = head;
  let temp = node;
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
