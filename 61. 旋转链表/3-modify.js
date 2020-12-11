var rotateRight = function (head, k) {
  // 思路, 把链表变成一个环, 并且用双指针定位, 然后当到了旋转点, 在断开链表,

  if (head == null) {
    return null;
  }

  let curr = head;
  let point = head;
  let count = 1; // Count为1是因为第一个节点就是1, 而不是0

  // 1. 将链表变成环, 并且计算一下链表长度
  while (curr.next != null) {
    count++;
    curr = curr.next;
  }
  curr.next = head;

  // 2. 找到需要断开的节点
  k = k % count; // 去重操作, k值有可能大于链表长度, 所以求余
  while (++k < count) {
    point = point.next;
  }

  // 3. 保存新头节点, 然后把断开点赋值为null
  let newHead = point.next;
  point.next = null;

  return newHead;
};
