//https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

const { ListNode, printList } = require("./ListNode");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let prev = null,
    slow = head,
    fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (prev && prev.next) prev.next = slow?.next;

  return head;
};

const head = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
const f = new ListNode(6);
const g = new ListNode(7);
head.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

printList(deleteMiddle(head));
