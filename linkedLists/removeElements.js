const { ListNode, printList } = require("./ListNode");

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let curr = head,
    prev = null;

  while (curr) {
    if (curr.val === val) {
      if (!prev) {
        head = head.next;
      } else {
        prev.next = curr.next;
      }
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return head;
};

const a = new ListNode(1);
const b = new ListNode(1);
const c = new ListNode(1);
const d = new ListNode(1);
a.next = b;
b.next = c;
c.next = d;
const head = a;

printList(removeElements(head, 1));
