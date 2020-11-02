/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 设立一个Prev节点, 将当前节点的Next指向prev节点, 然后把当前节点变为下一个节点, 重复操作
// 这是迭代法

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

// 尾递归的方式, 就是把迭代简化, 把 prev = curr 和 curr = next放到返回中

var reverseList = function (head) {
  const reverse = (prev, curr) => {
    if (!curr) {
      return prev;
    }

    let next = curr.next;
    curr.next = prev;

    return reverse(curr, next); // 参数赋值相当于 prev = curr, curr = next
  };

  return reverse(null, head);
};

// 栈解:
// 因为栈是先入后出, 所以可以先坐一个栈把链表的值都压入进去, 然后自己构造一个新的链表, 返回新的链表

var reverseList = function (head) {
  let tmp = head;
  let thead = new ListNode(0);
  let pre = thead;
  let stack = [];

  while (tmp) {
    stack.push(tmp.val);
    tmp = tmp.next;
  }

  while (stack.length !== 0) {
    pre.next = new ListNode(stack.pop());
    pre = pre.next;
  }

  return thead.next;
};
