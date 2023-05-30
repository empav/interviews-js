//https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

const { ListNode, printList } = require("./ListNode");

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy,
    curr = head;

  while (curr) {
    while (curr.next && curr.val == curr.next.val) {
      curr = curr.next;
    }
    if (prev.next == curr) {
      prev = curr;
    } else {
      prev.next = curr.next;
    }
    curr = curr.next;
  }

  return dummy.next;
};

const a = new ListNode(1);
const b = new ListNode(1);
const c = new ListNode(1);
const d = new ListNode(3);
const e = new ListNode(4);
const f = new ListNode(5);
const g = new ListNode(6);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
const head = a;

printList(deleteDuplicates(head));
