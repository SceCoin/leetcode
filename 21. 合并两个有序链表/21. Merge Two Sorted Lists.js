/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//递归算法,
//先判断两个节点的val的大小, 小的那个节点把其next断开,
//然后使它的next指针指向像一个对比, 下一次对比的就是小的next和原先的节点.
//然后返回是它自己这节点, 这样才会不断指向下一次.  最终到了null后结束
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
