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
var swapPairs = function (head) {
  const dummy = new ListNode(1, head);
  let prev = dummy;
  while (prev.next && prev.next.next) {
    let node1 = prev.next;
    let node2 = node1.next;
    let node3 = node2.next;
    prev.next = node2;
    node2.next = node1;
    node1.next = node3;
    prev = node1;
  }
  return dummy.next;
};
