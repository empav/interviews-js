//https://leetcode.com/problems/odd-even-linked-list/

const ListNode = require("./ListNode").ListNode;
const printList = require("./ListNode").printList;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let curr = head,
    evenNodes = [],
    oddNodes = [],
    i = 1;

  while (curr) {
    if (i % 2 === 0) {
      if (evenNodes.length) {
        evenNodes[evenNodes.length - 1].next = curr;
      }
      evenNodes.push(curr);
    } else {
      if (oddNodes.length) {
        oddNodes[oddNodes.length - 1].next = curr;
      }
      oddNodes.push(curr);
    }
    curr = curr.next;
    i++;
  }

  if (oddNodes.length && evenNodes.length) {
    evenNodes[evenNodes.length - 1].next = null;
    oddNodes[oddNodes.length - 1].next = evenNodes[0];
    head = oddNodes[0];
  }

  return head;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
const f = new ListNode(6);
const g = new ListNode(7);
const h = new ListNode(8);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
const head = a;

printList(oddEvenList(head));
