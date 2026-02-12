/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode(1, head);
  let prev = dummy;
  while (true) {
    let tail = prev;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        return dummy.next;
      }
    }
    const newGroupHead = tail.next;
    const [newHead, newTail] = reverseList(prev.next, tail);
    prev.next = newHead;
    newTail.next = newGroupHead;
    prev = newTail;
  }
};

const reverseList = (head, tail) => {
  let prev = null;
  let current = head;
  while (prev !== tail) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return [tail, head];
};
