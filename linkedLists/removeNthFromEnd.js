//https://leetcode.com/problems/remove-nth-node-from-end-of-list/


const { ListNode, printList } = require("./ListNode");

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next) return null;
  if (!head.next.next) {
    if (n === 1) {
      head.next = null;
      return head;
    }
    if (n === 2) {
      return head.next;
    }
  }

  let curr = head,
    nBeforeEnd = head,
    prev = null;

  let i = 1;
  while (curr && curr.next) {
    curr = curr.next;
    if (i >= n) {
      prev = nBeforeEnd;
      nBeforeEnd = nBeforeEnd.next;
    }
    i++;
  }

  if (!prev) {
    head = head.next;
    return head;
  }

  prev.next = nBeforeEnd?.next;

  return head;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
// const d = new ListNode(4);
// const e = new ListNode(5);
// const f = new ListNode(6);
// const g = new ListNode(7);
a.next = b;
b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;
const head = a;

printList(removeNthFromEnd(head, 3));
