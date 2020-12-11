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
  // 思路: 因为在链表创建时 random指向还未定, 所以需要先创建链表,
  //      然后在给每个节点附上 random 属性

  // 0. base case, 考虑链表为空的情况
  if (head == null) {
    return head;
  }

  let node = new Node();
  let curr = head;
  let temp = node;
  let map = new Map();

  // 1. 创建新的链表, 每个节点赋值, 然后创建下一个节点. map用来保存映射关系
  while (curr != null) {
    temp.val = curr.val;
    temp.next = curr.next ? new Node() : null;
    map.set(curr, temp);

    temp = temp.next;
    curr = curr.next;
  }

  // 2. 重新让 curr, temp回到头节点
  curr = head;
  temp = node;

  // 3. 为新链表的 random 属性赋值
  while (curr != null) {
    temp.random = curr.random ? map.get(curr.random) : null;

    temp = temp.next;
    curr = curr.next;
  }

  return node;
};
