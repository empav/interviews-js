const { ListNode, printList } = require("./ListNode");

const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
    let nextNode = curr.next; // first, make sure we don't lose the next node
    curr.next = prev; // reverse the direction of the pointer
    prev = curr; // set the current node to prev for the next node
    curr = nextNode; // move on
  }

  return prev;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;
const head = a;

printList(reverseList(head));
