/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head, next) {
  let curr = head;

  while (curr && (curr.next || curr.child)) {
    if (curr.child) {
      curr.next = flatten(curr.child, curr.next);
      curr.child = null;
      curr.next.prev = curr;
    }

    curr = curr.next;
  }

  if (next) {
    next.prev = curr;
    curr.next = next;
  }

  return head;
};
