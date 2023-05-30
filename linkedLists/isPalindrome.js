const { ListNode, printList } = require("./ListNode");

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  // Get middle of the linked list.
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half of the linked list.
  let nextNode,
    prev = null;
  while (slow != null) {
    nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  let start = head;
  while (prev) {
    if (start.val !== prev.val) return false;
    prev = prev.next;
    start = start.next;
  }

  return true;
};

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(1);
a.next = b;
b.next = c;
c.next = d;
const head = a;

console.log(isPalindrome(head));
