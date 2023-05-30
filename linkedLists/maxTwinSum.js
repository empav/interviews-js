//https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

const { ListNode } = require("./ListNode");

/**
 * @param {ListNode} head
 * @return {number}
 */
var maxTwinSum = function (head) {
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
  let maximumSum = 0;
  while (prev) {
    maximumSum = Math.max(maximumSum, start.val + prev.val);
    prev = prev.next;
    start = start.next;
  }

  return maximumSum;
};

const a = new ListNode(5);
const b = new ListNode(4);
const c = new ListNode(2);
const d = new ListNode(1);
const e = new ListNode(5);
const f = new ListNode(3);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
const head = a;

console.log(maxTwinSum(head));
