/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const mergeList = (i, j) => {
    if (i > j) return null;
    if (i === j) return lists[i];
    const mid = Math.floor((i + j) / 2);
    const left = mergeList(i, mid);
    const right = mergeList(mid + 1, j);
    return merge(left, right);
  };
  return mergeList(0, lists.length - 1);
};

const merge = (l1, l2) => {
  const dummy = new ListNode(0);
  let curr = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
};
