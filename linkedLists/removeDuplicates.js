//https://leetcode.com/problems/remove-duplicates-from-sorted-list/editorial/


const ListNode = require("./ListNode").ListNode;
const printList = require("./ListNode").printList;

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let current = head;
  while (current && current.next) {
    if (current.next.val == current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

const a = new ListNode(1);
const b = new ListNode(1);
const c = new ListNode(2);
const d = new ListNode(3);
const e = new ListNode(3);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
const head = a;

printList(deleteDuplicates(head));
