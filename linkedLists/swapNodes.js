//https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/


const { ListNode, printList } = require("./ListNode");

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let left = head,
    right = head;

  for (let i = 1; i < k; i++) left = left.next;

  let curr = left;
  while (curr.next) {
    curr = curr.next;
    right = right.next;
  }

  [left.val, right.val] = [right.val, left.val];

  return head;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
const head = a;

printList(swapNodes(head, 2));
