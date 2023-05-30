//https://leetcode.com/problems/linked-list-cycle/


const ListNode = require("./ListNode").ListNode;

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

const head = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);
head.next = b;
b.next = c;
c.next = d;
// d.next = b

console.log(hasCycle(head));
