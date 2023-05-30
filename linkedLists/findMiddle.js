//https://leetcode.com/problems/middle-of-the-linked-list/editorial/


const ListNode = require("./ListNode").ListNode;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const head = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
const f = new ListNode(6);
head.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(middleNode(head));
